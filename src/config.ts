//
//  config.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 11:58 PM.
//

export const prefix = process.env.NODE_ENV === "production" ? "`" : '"'

export const url = {
    repo: "https://github.com/codingthrone/coding-throne-bot",
}

export const messages = {
    notACommand: (wrongCommand: string): string =>
        `\`${prefix}${wrongCommand}\` is not a command.\nType \`${prefix}help\` for more information my commands. :p`,
    contribute: (repo: string) =>
        `Our open-source code is hosted here:\n${repo}\n\nMost PRs will be accepted. So have fun!`,
}
