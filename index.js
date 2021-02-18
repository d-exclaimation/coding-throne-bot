
const Discord = require("discord.js");
const fs = require("fs");
const { bot, messages } = require("./config");
const { propagate } = require("./util");

// Environment
require("dotenv").config({ path: `${__dirname}/.env` });

// Bot Client
const client = new Discord.Client();
client.commands = new Discord.Collection();

// Configuration
const { prefix } = bot;
const { notACommand } = messages;
const commandFiles = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"));
propagate(client.commands, `${__dirname}/commands`);

client.once("ready", () => {
    console.log("Hello Sir!");
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        const _command = client.commands.get(command);
        if (!_command)
            return notACommandHandler(message, args, command);
        _command.execute(message, args);
    } catch (err) {
        console.log(err);
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);

// Helpers

function notACommandHandler(message, args, wrongMessage) {
    const msgContent = notACommand(wrongMessage);

    return message.reply(msgContent);
}
