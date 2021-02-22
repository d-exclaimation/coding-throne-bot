//
//  invite.ts
//  coding-throne-bot
//

import { Command } from "discord-akairo"
import { Message, TextChannel } from "discord.js"

export default class InviteCommand extends Command {
    constructor() {
        super("invite", {
            aliases: ["invite"],
            channel: "guild",
        })
    }

    exec(message: Message): void {
        ;(async () => {
            try {
                const invite = await (message.channel as TextChannel).createInvite(
                    {
                        unique: true,
                        temporary: false,
                    }
                )
                await message.channel.send(`https://discord.gg/${invite.code}`)
            } catch (err) {
                console.log(err)
                const warning = await message.reply(
                    "Sorry, I can't make an invite for this channel"
                )
                await warning.react(":cry:")
            }
        })()
    }
}
