import CommandExecute from "./commandExecuteInterface";
import CommandInfoInterface from "./commandInfoInterface";
export default interface CommandInterface {
    name: string,
    info: CommandInfoInterface
    execute: CommandExecute,
}