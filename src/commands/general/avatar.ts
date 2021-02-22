//
//  avatar.ts
//  coding-throne-bot
//
//

import { Command } from "discord-akairo"
import { Message } from "discord.js"

export default class AvatarCommand extends Command {
    constructor() {
        super("avatar", {
            aliases: ["avatar", "profile"]
        })
    }

    exec(message: Message): void {
        ;(async () => {
            if(!message.mentions.users.size) {
                const avatar = message.author.displayAvatarURL({ format: "png", dynamic: true })
                await message.reply(`This is your avatar, ${avatar}`)
            } else {
                const images = message.mentions.users.map( user => {
                    return user.displayAvatarURL({ format: "png", dynamic: true });
                });
                await message.channel.send(images);
            }
        })()
    }
}
