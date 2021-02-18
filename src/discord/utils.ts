//
//  utils.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 11:05 PM.
//

import * as fs from "fs"
import * as path from "path"
import { BotCommand } from "../interfaces/command"

const createCollection = (): Map<string, BotCommand> => {
    let commands = new Map<string, BotCommand>()
    const commandDir = path.join(__dirname, "/../commands")

    const createCollectionHelper = (_path: string) => {
        try {
            const dir = fs.readdirSync(_path)

            for (const file of dir) {
                const isFile = fs.lstatSync(path.join(_path, file)).isFile()
                const newPath = path.join(_path, file)

                if (!isFile) {
                    createCollectionHelper(newPath)
                    continue
                }

                const isCommand =
                    isFile &&
                    (newPath.endsWith(".ts") || newPath.endsWith(".js")) &&
                    !newPath.endsWith(".js.map")
                if (isCommand) {
                    const command: BotCommand = require(newPath)
                    commands.set(command.name, command)
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    createCollectionHelper(commandDir)
    return commands
}

export const commandCollection = createCollection()
