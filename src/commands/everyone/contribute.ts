//
//  contribute.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 12:04 AM.
//

import { url, messages } from "../../config"
import { BotCommand } from "../../interfaces/command"
import { Message } from "discord.js"

const contribute: BotCommand = {
    name: "contribute",
    description: "shows how to contribute",
    execute(message: Message, args: string[]) {
        ;(async () => {
            const { repo } = url
            const _message = messages.contribute(repo)
            await message.author.send(_message)
            console.log("hello")
        })()
    },
}

export const { name, description, execute } = contribute
