//
//  command.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 11:09 PM.
//

import { Message } from "discord.js"

export interface BotCommand {
    name: string
    description: string
    isGuildOnly?: boolean
    category?: string
    execute(message: Message, args: string[]): void
}
