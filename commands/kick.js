module.exports = {
    name: 'kick',
    description: "Kicks the user" ,
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberId = message.guild.members.cache.get(member.id);
            memberId.kick();
            message.channel.send("User has been kicked");  
        }else{
            message.channel.send('You could not kick that member')
        }
    }
}