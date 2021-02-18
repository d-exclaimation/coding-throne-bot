//
//  help.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 12:13 AM.
//

import { MessageEmbed } from "discord.js"
import { BotCommand } from "../../interfaces/command"
import { prefix } from "../../config"
import { commandCollection } from "../../discord/utils"

const help: BotCommand = {
    name: "help",
    description: "should be self-explanatory",
    category: "general",
    execute: (message, args) => {
        const byCategory = args[0] || "general" // Idk what this is for

        const commandsEntries = Array.from(commandCollection, ([key, val]) => ({
            name: key,
            ...val,
        }))

        const embed = new MessageEmbed()
            .setTitle("Command-List")
            .setFooter(
                `Type ${prefix}help <command> for more info on a command.`
            )
            .setTimestamp()
            .setColor("#0099ff")

        commandsEntries.forEach((command: BotCommand) =>
            embed.addField(`> ${command.name}`, `\`${command.description}\``)
        )
        ;(async () => {
            await message.channel.send(embed)
        })()

        /* HELPERS */
        /*
         * I still don't know what this is
         * */
        function filterByCategory(): Map<string, Map<BotCommand, boolean>> {
            const commandsWithCategory = commandsEntries.filter(
                (command: BotCommand) => command.category
            )

            const uniqueCategories = commandsWithCategory.map(
                (command: BotCommand) => command.category
            )

            let categories = new Map<string, Map<BotCommand, boolean>>()

            uniqueCategories.forEach((e) => categories.set(e, new Map()))

            commandsWithCategory.forEach((command: BotCommand) => {
                categories.get(command.category)?.set(command, true)
            })

            return categories
        }
    },
}

export const { name, description, category, execute } = help
