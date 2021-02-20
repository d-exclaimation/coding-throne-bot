import Command from './Command'
import CommandInterface from './interfaces/ICommand';
import ICommandExecute from './interfaces/ICommandExecute'
import ICommandInfo from './interfaces/ICommandInfo'

export class CommandBuilder {
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
