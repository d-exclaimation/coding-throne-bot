import Command from './Command'
import CommandExecute from './commandExecuteInterface'
import CommandInfoInterface from './commandInfoInterface'

export class CommandBuilder {
    name: string
    info: CommandInfoInterface
    execute: CommandExecute
    withName(name: string) {
        this.name = name
        return this
    }
    withFunctionality(functionality: CommandExecute) {
        this.execute = functionality
        return this
    }
    hasInfo(info: CommandInfoInterface) {
        this.info = info
        return this
    }
    build() {
        return new Command(this.name, this.execute, this.info)
    }
}
