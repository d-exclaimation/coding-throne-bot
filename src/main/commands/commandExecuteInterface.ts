import {CommandMessage} from "@typeit/discord";
import { Client } from "discord.js";

type CommandExecute = (message: CommandMessage, client?: Client) => any;
export default CommandExecute;

/**
 * TODO: create AsyncCommandExecute
 */