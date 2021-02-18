//
//  ping.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 12:59 AM.
//

import { BotCommand } from "../interfaces/command"
import { Message } from "discord.js"

const ping: BotCommand = {
    name: "ping",
    description: "this is a ping command",
    execute(message: Message, args: string[]) {
        ;(async () => {
            await message.channel.send("Pong!")
        })()
    },
}

export const { name, description, execute } = ping
