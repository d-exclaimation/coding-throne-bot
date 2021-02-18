//
//  client.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 10:50 PM.
//

import { Discord, On, ArgsOf, Client } from "@typeit/discord"
import { commandCollection } from "./utils"
import { prefix, messages, url } from "../config"

const { notACommand } = messages

@Discord()
abstract class AppDiscord {
    @On("message")
    private async onMessage(
        [message]: ArgsOf<"message">,
        client: Client
    ): Promise<void> {
        if (!message.content.startsWith(prefix) || message.author.bot) return

        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase()

        try {
            const botCommand = commandCollection.get(command)
            if (!botCommand) {
                await message.reply(notACommand(command))
                return
            }

            if (botCommand.isGuildOnly && message.channel.type === "dm") return

            botCommand.execute(message, args)
        } catch (e) {
            console.log(e.message)
        }
    }
}
