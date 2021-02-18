//
//  command.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 11:09 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Message } from "discord.js"

export interface BotCommand {
    name: string,
    description: string,
    execute(message: Message, args: string[]): void
}
