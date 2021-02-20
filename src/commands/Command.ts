import CommandInterface from './interfaces/ICommand'
import ICommandInfo from './interfaces/ICommandInfo'
import CommandExecuteInterface from './interfaces/ICommandExecute'

export default class Command implements CommandInterface {
    name: string
    info: ICommandInfo
    execute: CommandExecuteInterface
    constructor(
        name: string,
        execute: CommandExecuteInterface,
        info: ICommandInfo
    ) {
        this.name = name
        this.info = info
        this.execute = execute
    }
}
