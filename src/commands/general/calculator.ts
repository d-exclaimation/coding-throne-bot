//
//  calculator.ts
//  coding-throne-bot
//

import { Command } from "discord-akairo"
import { Message } from "discord.js"

export default class CalculatorCommand extends Command {
    constructor() {
        super("calc", {
            aliases: ["calculator", "eval"]
        })
    }

    exec(message: Message): void {
        const args = message.content
            .split(" ")
            .slice(1)
        // This is a calculator so, I don't want Javascript code to be run here
        const hasNum = args.filter(val => {
                return val.toUpperCase() === val.toLowerCase()
            }).length

        // Exit early if contain anything but number and symbol
        if (hasNum !== args.length)
            return

        ;(async () => {
            try {
                const res = parseFloat(eval(args.join("")));
                await message.channel.send(`Result is: ${res}`)
            } catch (err) {
                console.log("Can't do")
                await message.reply("Can't do")
            }
        })()
    }
}
