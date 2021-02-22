import * as dotenv from "dotenv"
import * as path from "path"
import {
    AkairoClient,
    CommandHandler,
    InhibitorHandler,
    ListenerHandler,
} from "discord-akairo"
import config from "./config"

dotenv.config()

class MyClient extends AkairoClient {
    commandHandler: CommandHandler
    inhibitorHandler: InhibitorHandler
    listenerHandler: ListenerHandler
    constructor() {
        super(
            {
                // Options for Akairo go here.
            },
            {
                // Options for discord.js goes here.
            }
        )

        // Init
        this.commandHandler = new CommandHandler(this, {
            directory: path.join(__dirname, "commands"),
            prefix: config.bot.prefix,
            // Options for the command handler goes here.
        })

        this.inhibitorHandler = new InhibitorHandler(this, {
            directory: path.join(__dirname, "./inhibitors/"),
        })

        this.listenerHandler = new ListenerHandler(this, {
            directory: path.join(__dirname, "./eventHandlers/"),
        })

        // Use
        this.commandHandler.useInhibitorHandler(this.inhibitorHandler)
        this.commandHandler.useListenerHandler(this.listenerHandler)
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            inhibitorHandler: this.inhibitorHandler,
            listenerHandler: this.listenerHandler,
        })

        // Load
        this.inhibitorHandler.loadAll()
        this.listenerHandler.loadAll()
        this.commandHandler.loadAll()
    }
}

const client = new MyClient()
;(async () => {
    await client.login(process.env.DISCORD_BOT_TOKEN)
})()

export default client
