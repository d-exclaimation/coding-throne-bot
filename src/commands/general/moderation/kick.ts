import { Command } from "discord-akairo"
import { Message, GuildMember } from "discord.js"

export default class KickCommand extends Command {
    constructor() {
        super("kick", {
            aliases: ["kick"],
            category: "Moderation",
            args: [
                {
                    id: "member",
                    type: "member",
                    prompt: {
                        start: (msg: Message) =>
                            `${msg.author} please provide a member to kick!`,
                        retry: (msg: Message) =>
                            `${msg.author} that is not a valid member to kick1`,
                    },
                },
                {
                    id: "reason",
                    default: "No Reason Provided",
                    match: "rest",
                },
            ],
            clientPermissions: ["KICK_MEMBERS"],
            userPermissions: ["KICK_MEMBERS"],
        })
    }
    exec(
        message: Message,
        { member, reason }: { member: GuildMember; reason: string }
    ) {
        if (!member.kickable)
            return message.channel.send(":x: That member is not kickable")

        try {
            member.kick()
            message.channel.send(
                `**${member.user.tag}** was kicked by **${message.author.tag}** for **${reason}**`
            )
        } catch (err) {
            message.channel.send(`Error: ${err}`)
        }
    }
}
