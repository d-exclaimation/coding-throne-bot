//
//  test.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 11:23 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Message } from "discord.js"

export const name = "test";
export const description = "this is testing purposes";

export function execute(message: Message, args: string[]) {
    (async () => {
        await  message.reply("testing works");
    })()
}
