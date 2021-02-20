import {
    Client,
    On,
    Command,
    CommandMessage,
    CommandNotFound,
    Discord,
    Description,
} from '@typeit/discord'
import config from '../../config'
import { CommandBuilder } from '../CommandBuilder'

const pingCommand = new CommandBuilder()
    .withName('ping')
    .hasInfo({ prefix: config.bot.prefix, description: 'Ping command' })
    .withFunctionality((message: CommandMessage) => {
        console.log('Executed command:', pingCommand.name)
        message.reply('🏓 Pong...')
    }).build()

@Discord(pingCommand.info.prefix)
export default abstract class PingCommand {
    @Command(pingCommand.name)
    @Description(pingCommand.info.description || 'none')
    private ping(message: CommandMessage) {
        pingCommand.execute(message)
    }
}
