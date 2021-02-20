import { Command, CommandMessage, Discord, Description } from '@typeit/discord'
import config from '../../config'
import CommandBuilder from '../CommandBuilder'

const pongCommand = new CommandBuilder()
    .withName('pong')
    .hasInfo({ prefix: config.bot.prefix, description: 'Ping command' })
    .withFunctionality((message: CommandMessage) => {
        console.log('Executed command:', pongCommand.name)
        message.reply('🏓 Ping...')
    })
    .build()

@Discord(pongCommand.info.prefix)
export default abstract class PingCommand {
    @Command(pongCommand.name)
    @Description(pongCommand.info.description || 'none')
    private ping(message: CommandMessage) {
        pongCommand.execute(message)
    }
}
