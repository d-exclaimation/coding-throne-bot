module.exports = {
  name: "kick",
  description: "Kicks the user",
  execute(message, args) {
    const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!args[0]) return message.channel.send("Please specify a user");

    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send("You can't use that!");

    if (member.kickable)
      return message.channel.send("That member is not kickable");

    let reason = args.slice(1).join(" ");

    if (!reason) reason = "Unspecified";

    if (!member) {
      return message.channel.send("Please provide a member to kick");
    } else {
      member.kick(reason).catch((err) => {
        if (err) return message.channel.send("Something went wrong");
      });
      message.channel.send(
        `**${member.user.username}** was kicked by **${message.author.username}** for **${reason}**`
      );
    }
  },
};
