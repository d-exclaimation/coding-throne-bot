import { Command, Listener } from "discord-akairo"
import { Message } from "discord.js"

export default class MissingPermissions extends Listener {
    public constructor() {
        super("missingPermissions", {
            emitter: "commandHandler",
            event: "missingPermissions",
        })
    }
    public exec(
        message: Message,
        command: Command,
        type: string,
        missing: any
    ) {
        if (type === "client")
            return message.channel.send(
                `I am missing the permission/s ${missing} for the ${command} command`
            )
        if (type === "user")
            return message.channel.send(
                `You are missing the following permission/s ${missing} for the ${command} command`
            )
    }
}
