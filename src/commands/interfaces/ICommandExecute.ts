import { CommandMessage } from '@typeit/discord'
import { Client } from 'discord.js'

type ICommandExecute = (message: CommandMessage, client?: Client) => any
export default ICommandExecute

/**
 * TODO: create AsyncCommandExecute
 */
