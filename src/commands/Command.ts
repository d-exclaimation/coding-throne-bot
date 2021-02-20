import CommandInterface from './commandInterface'
import CommandInfoInterface from './commandInfoInterface'
import CommandExecuteInterface from './commandExecuteInterface'

export default class Command implements CommandInterface {
    name: string
    info: CommandInfoInterface
    execute: CommandExecuteInterface
    constructor(
        name: string,
        execute: CommandExecuteInterface,
        info: CommandInfoInterface
    ) {
        this.name = name
        this.info = info
        this.execute = execute
    }
}
