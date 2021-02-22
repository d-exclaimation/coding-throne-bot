import { On, Client, ArgsOf } from "@typeit/discord"

export default abstract class OnMessage {
    @On("message")
    static onMessage(
        [message]: ArgsOf<"message">,
        client: Client,
        guardPayload: any
    ) {
        if (message.author.bot) return
        console.log(
            `[Message received] ${message.author.username} says: "${message.content}"`
        )
    }
}
