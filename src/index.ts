//
//  index.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 10:46 PM.
//

import { Client } from "@typeit/discord";
import * as dotenv from "dotenv";

// Configure environment variables
dotenv.config({ path: __dirname + '/../.env' });

export class Main {
    private static _client: Client;

    static get Client(): Client {
        return this._client;
    }

    static async start(): Promise<void> {
        this._client = new Client();

        await this._client.login(
            process.env.DISCORD_BOT_TOKEN,
            `${__dirname}/discord/*.ts`,
            `${__dirname}/discord/*.js`,
        );
    }
}

Main.start().then(() => console.log("Bot is online"));
