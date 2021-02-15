module.exports = {
    name: 'ping',
    description: "this is a ping commnd" ,
    execute(message, args){
        message.channel.send('pong!');
    }
}