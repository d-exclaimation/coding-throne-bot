//
//  message.ts
//  coding-throne-bot
//

import { Listener } from "discord-akairo"
import { Message } from "discord.js"

export default class MessageListener extends Listener {
    constructor() {
        super("message", {
            emitter: "client",
            event: "message",
        })
    }

    exec(message: Message) {
        if (message.author.bot) return

        // Todo:
        //  - Should probably be changed to something else, as this is not really needed
        console.log(
            `[Message received] ${message.author.username} says: "${message.content}"`
        )
    }
}
