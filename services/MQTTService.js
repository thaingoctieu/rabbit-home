import * as React from 'react';
import { useEffect, useContext, useState, useReducer } from 'react';
import init from 'react_native_mqtt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';


init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {},
});

class MQTTService {
    static instance = null;

    static getInstance() {
        if (!MQTTService.instance) {
            MQTTService.instance = new MQTTService();
        }
        return MQTTService.instance;
    }

    constructor() {
        const clientId = uuid.v4().slice(0, 23);
        this.client = new Paho.MQTT.Client(
            'io.adafruit.com',
            443,
            clientId
        );
        this.username = 'tracogt'
        this.password = 'aio_WeJh201drhXAQi2v2RYrYFdGEYIU'
        this.client.onConnectionLost = this.onConnectionLost
        this.client.onMessageArrived = this.onMessageArrived
        this.isConnected = false
        this.valuelist = {}
    }

    connect = (handleSuccess) => {
        if (!this.isConnected) {
            this.client.connect({
                userName: 'tracogt',
                password: 'aio_WeJh201drhXAQi2v2RYrYFdGEYIU',
                onSuccess: async () => {
                    console.log('connect susccessfully')
                    this.isConnected = true
                    handleSuccess()
                    // this.subscribe('tracogt/feeds/mb-temp')
                    // this.subscribe('tracogt/feeds/mb-humid')
                },
                onFailure: () => console.log('failed to connect'),
                keepAliveInterval: 600,
                useSSL: true,
            })
        }
    }

    disconnect = () => {
        if (this.isConnected) {
            this.client.disconnect();
            this.isConnected = false;
        }
    }

    onMessageArrived = (message) => {
        const { topic, payloadString } = message
        console.log('onMessageArrived: ' + payloadString);
        this.valuelist = { ...this.valuelist, [topic]: payloadString, }
        // console.log(this.valuelist)
    }

    onConnectionLost = (responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log('onConnectionLost:' + responseObject.errorMessage);
        }
    }

    subscribe = (topic) => {
        // const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
        this.client.subscribe(topic, {
            onSuccess: () => console.log('subscribe successfully'),
            onFailure: () => console.log('failed to subscribe'),
        });
        // await sleep(1000)
    };

    unsubscribe = (topic) => {
        this.client.unsubscribe(topic)
    }

    publishMessage = (topic) => {
        this.client.publish(`${topic}/get`, 'tracogt');
    };

    setValue = (topic, value) => {
        const message = new Paho.MQTT.Message((value).toString());
        // setValue(32)
        console.log('set value')
        message.destinationName = topic;
        this.client.send(message);
    };
}

export default MQTTService.getInstance();

