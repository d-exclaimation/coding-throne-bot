import ICommandExecute from "./ICommandExecute"
import ICommandInfo from "./ICommandInfo"
export default interface CommandInterface {
    name: string
    info: ICommandInfo
    execute: ICommandExecute
}
