const { GuildMember } = require("discord.js");

module.exports = {
    name: 'mute',
    description: "mutes a member" ,
    execute(message, args){
        GuildMember.roles.set(['781083449209389058'])
  .then(console.log)
  .catch(console.error);
    }
}