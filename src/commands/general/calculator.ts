//
//  calculator.ts
//  coding-throne-bot
//

import { Command } from "discord-akairo"
import { Message } from "discord.js"
import { splitWords, infixToPostfix, evaluatePostfix} from "../../helper/calculatorHelper"

export default class CalculatorCommand extends Command {
    constructor() {
        super("calc", {
            aliases: ["calculator", "eval"]
        })
    }

    exec(message: Message): void {
        const args = message.content
            .split(" ")
            .slice(1, message.content.length)
            .join(" ")
        ;(async () => {
            const postfixes = infixToPostfix(splitWords(args))
            const res = evaluatePostfix(postfixes)
            if (res) {
                await message.channel.send(`Result is: ${res}`)
            } else {
                console.log("Can't do")
                await message.reply("Can't do")
            }
        })()
    }
}
