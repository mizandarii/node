const EventEmitter = require('events')

// class Logger extends EventEmitter{
//     log(message){
//         this.emit('message', `${message} ${Date.now()}`)
//     }
// }

// const logger = new Logger()

// logger.on('message', data => [
//     console.log(data)
// ])

// logger.log('Hello')
// logger.log('Hello')
// logger.log('Hello')

let count = 1;
class Logger extends EventEmitter{
    
    log(myOwnMessage){
        this.emit('myOwnMessage', `${count} ${myOwnMessage}`)
        count ++;
    }
}

const logger = new Logger()

logger.on('myOwnMessage', data => [
    console.log(data)
])

logger.log("A witch's vehicle goes brrroom brrroom!")
logger.log('I failed math so many times at school, I can’t even count.')
//logger.log('Third')

