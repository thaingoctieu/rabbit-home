
const EventEmitter = require('events').EventEmitter

class ObserverService {
    init(arg) {
        try {
            console.log('Starting the Observer Service...')
        } catch (err) {
            console.log(err)
        }

        // more action

        console.log('Service ends')
    }

}

module.exports = new ObserverService()