const Discord = require("discord.js");
const config = require("../../config");

module.exports = {
  name: "contribute",
  description: "shows how to contribute",
  category: "general",
  /**
   *
   * @param {Discord.Message} message
   * @param {[]} args
   */
  execute: (message, args) => {
    const { repo } = config.url;
    const _message = config.messages.contribute(repo);
    message.author.send(_message);
  },
};
