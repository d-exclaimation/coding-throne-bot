//
//  kick.ts.ts
//  coding-throne-bot
//
//

import { Command } from "discord-akairo"
import { Message } from "discord.js"

export default class KickCommand extends Command {
    constructor() {
        super("kick", {
            aliases: ["kick"],
        })
    }
    exec(message: Message) {
        const args = message.content.split(" ").slice(1);
        const member =
            message.mentions.members?.first() ||
            message.guild?.members.cache.get(args[0])
        ;(async () => {

            if (!member || !args[0]) {
                await message.channel.send("Please provide a member to kick")
                return
            }

            if (!message.member || !message.member.hasPermission("KICK_MEMBERS")) {
                await message.channel.send("You can't use that!")
                return
            }

            if (member.kickable) {
                await message.channel.send("That member is not kickable")
                return
            }

            let reason = args.slice(1).join(" ")

            if (!reason)
                reason = "Unspecified"

            member.kick(reason).catch(async (err) => {
                if (err) {
                    await message.channel.send("Something went wrong")
                    return
                }
            })
            await message.channel.send(
                `**${member.user.username}** was kicked by **${message.author.username}** for **${reason}**`,
            )
        })()
    }
}


