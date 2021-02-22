import { On, Client } from "@typeit/discord"
import config from "../config"

export default abstract class OnRead {
    @On("ready")
    static onReady(bot: any) {
        console.log(
            `[Ready] But up and running with prefix '${config.bot.prefix}'`
        )
    }
}
