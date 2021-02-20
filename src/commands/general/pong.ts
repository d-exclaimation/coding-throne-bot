import {Command} from "discord-akairo";
import {Message} from "discord.js";

class PongCommand extends Command {
    constructor() {
        super("pong", {
          aliases: ["pong"]  
        })
    }
    exec(message: Message) {
        return message.reply("🏓 Ping...")
    }
}

export default PongCommand;