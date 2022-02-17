module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        /*Send "pong!" message to channel when user inserts "ping"*/
        message.channel.send('pong!');
    }
}
