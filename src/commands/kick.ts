//
//  kick.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 12:53 AM.
//

import { BotCommand } from "../interfaces/command"

const kick: BotCommand = {
    name: "kick",
    description: "Kicks the user",
    isGuildOnly: true,
    execute(message, args) {
        ;(async () => {
            const member =
                message.mentions.members.first() ||
                message.guild.members.cache.get(args[0])

            if (!args[0]) {
                await message.channel.send("Please specify a user")
                return
            }

            if (!message.member.hasPermission("KICK_MEMBERS")) {
                await message.channel.send("You can't use that!")
                return
            }

            if (member.kickable) {
                await message.channel.send("That member is not kickable")
                return
            }

            let reason = args.slice(1).join(" ")

            if (!reason) reason = "Unspecified"

            if (!member) {
                await message.channel.send("Please provide a member to kick")
            } else {
                member.kick(reason).catch(async (err) => {
                    if (err) {
                        await message.channel.send("Something went wrong")
                        return
                    }
                })
                await message.channel.send(
                    `**${member.user.username}** was kicked by **${message.author.username}** for **${reason}**`
                )
            }
        })()
    },
}

export const { name, description, isGuildOnly, execute } = kick
