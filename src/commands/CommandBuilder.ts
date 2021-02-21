import Command from './Command'
import ICommandExecute from './interfaces/ICommandExecute'
import ICommandInfo from './interfaces/ICommandInfo'

export default class CommandBuilder {
    name: string | undefined;
    info: ICommandInfo | undefined;
    execute: ICommandExecute | undefined;
    constructor(){

    }
    withName(name: string) {
        this.name = name
        return this
    }
    withFunctionality(functionality: ICommandExecute) {
        this.execute = functionality
        return this
    }
    hasInfo(info: ICommandInfo) {
        this.info = info
        return this
    }
    build() {
        return new Command(this.name as string, this.execute as ICommandExecute, this.info as ICommandInfo)
    }
}
