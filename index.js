const Discord = require('discord.js');
require("dotenv").config({path: `${__dirname}/.env`});
const fs = require('fs');
const client = new Discord.Client();
const config = { bot, messages } =  require("./config");
const util = { propagate } = require("./util");

client.commands = new Discord.Collection();

/* Config */
const { prefix } = bot;
const { notACommand } = messages;

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
propagate(client.commands, `${__dirname}/commands`);
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);

//     client.commands.set(command.name, command);
// }

client.once('ready', () => {
    console.log("Hello Sir!")
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        const _command = client.commands.get(command);
        if(!_command) return notACommandHandler(message, args, command);
        _command.execute(message, args); 
    } catch(err) {
        console.log(err);
    }

    // if(command === 'ping'){
    //     client.commands.get('ping').execute(message, args);
    // } else if (command === 'invite'){
    //     client.commands.get('invite').execute(message, args);
    // } else if (command === 'kick'){
    //     client.commands.get('kick').execute(message, args);
    // } else if (command === 'help'){
    //     client.commands.get('help').execute(message, args);
    // } 
    
});

client.login(process.env.DISCORD_BOT_TOKEN);


/* Helpers */

function notACommandHandler(message, args, wrongMessage) {
    const msgContent = notACommand(wrongMessage);

    return message.reply(msgContent);
}