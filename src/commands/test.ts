//
//  test.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 11:23 PM.
//

import { Message } from "discord.js"
import { BotCommand } from "../interfaces/command"

const test: BotCommand = {
    name: "test",
    description: "this is testing purposes",
    execute(message: Message, args: string[]) {
        ;(async () => {
            await message.reply("testing works")
        })()
    },
}

export const { name, description, execute } = test
