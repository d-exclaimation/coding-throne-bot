const Discord = require('discord.js');
require("dotenv").config({path: `${__dirname}/.env`});
const fs = require('fs');
const { get } = require('http');
const client = new Discord.Client();
const config = {prefix} =  require("./config");
const util = { propagate } = require("./util");

client.commands = new Discord.Collection();

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

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'invite'){
        client.commands.get('invite').execute(message, args);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    } 
    
});

client.login(process.env.DISCORD_BOT_TOKEN);
