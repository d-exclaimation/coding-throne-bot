/**
 * Author: rbrtbrnschn
 */
const { listCommands } = require("../../util");
const discord = require("discord.js");
const config = require("../../config");

module.exports = {
  name: "help",
  description: "should be self-explanatory",
  category: "general",
  execute: (message, args) => {
    const byCategory = args[0] || "general";
    const commands = listCommands();
    const commandsEntries = Array.from(commands, ([k,v]) => ({name: k,...v}))
    
    const embed = new discord.MessageEmbed();
    embed.setTitle("Command-List");
    embed.setFooter(`Type ${config.prefix}help <command> for more info on a command.`)
    embed.setTimestamp();
    embed.setColor('#0099ff');
    commandsEntries.forEach((e) => embed.addField(`> ${e.name}`, `\`${e.description}\``))

    message.channel.send(embed);

    /* HELPERS */
    /**
     * Dont know bout this.
     */
    function filterByCategory() {
      const commandsWithCategory = commandsEntries.filter((e) => e.category);
      const uniqueCategories = commandsWithCategory.map((e) => e.category);
      let categories = new Map() 

      uniqueCategories.forEach((e) => categories.set(e, new Map()));
      
      commandsWithCategory.forEach((e) => {
        categories.get(e.category).set(e); 
      })
      
      return categories
    }
  }
}