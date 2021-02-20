import { On, Client, ArgsOf } from '@typeit/discord'
import { Message } from 'discord.js'

export default abstract class OnMessage {
    @On('message')
    static onMessage(
        [message]: ArgsOf<'message'>,
        client: Client,
        guardPayload: any
    ) {
        console.log(`Message received: ${message.content}`)
    }
}
