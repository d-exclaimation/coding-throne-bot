//
//  invite.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 12:38 AM.
//

import { BotCommand } from "../interfaces/command"
import { Message, TextChannel } from "discord.js"

const invite: BotCommand = {
    name: "invite",
    description: "sends a server invite",
    isGuildOnly: true,
    execute(message: Message, args: string[]) {
        ;(async () => {
            const invitation = await (message.channel as TextChannel).createInvite(
                { unique: true, temporary: false }
            )
            await message.channel.send(`https://discord.gg/${invitation.code}`)
        })()
    },
}

export const { name, description, isGuildOnly, execute } = invite
