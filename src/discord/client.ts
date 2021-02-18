//
//  client.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 10:50 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {
    Discord,
    On,
    ArgsOf,
    Client
} from "@typeit/discord";
import { commands } from "./utils";


const prefix = process.env.NODE_ENV === "production" ? "`" : '"'


@Discord()
abstract class AppDiscord {
    @On("message")
    private async onMessage([message]: ArgsOf<"message">, client: Client): Promise<void> {

        if (!message.content.startsWith(prefix) || message.author.bot)
            return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        try {
            const botCommand = commands.get(command);
            if(!botCommand) {
                await message.reply("Not a command!");
                return
            }
            botCommand.execute(message, args);
        } catch (e) {
            console.log(e.message);
        }
    }
}
