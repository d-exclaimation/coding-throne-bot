//
//  utils.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 11:05 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import * as fs from 'fs';
import * as path from 'path';
import { BotCommand } from "../interfaces/command"

const createCollection = (): Map<string, BotCommand> => {
    let commands = new Map<string, BotCommand>();
    const commandDir = path.join(__dirname, "/../commands");

    const createCollectionHelper = (_path: string) => {
        try {
            const dir = fs.readdirSync(_path);

            for (const file of dir) {
                const isFile = fs.lstatSync(path.join(_path, file)).isFile();
                const newPath = path.join(_path, file)
                console.log(newPath);

                if (!isFile) {
                    createCollectionHelper(newPath);
                    continue;
                }

                const isCommand = isFile && newPath.endsWith(".ts");
                const command: BotCommand = require(newPath);
                if (isCommand) {
                    commands.set(command.name, command)
                }
            }

        } catch (e) {
           console.log(e);
        }
    };

    createCollectionHelper(commandDir);
    return commands;
};

export const commands = createCollection();
