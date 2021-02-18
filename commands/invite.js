module.exports = {
    name: "invite",
    description: "Sends a server invite",
    execute(message, args) {
        message.channel
            .createInvite({ unique: true, temporary: false })
            .then((invite) => {
                message.channel.send(`https://discord.gg/${invite.code}`)
            })
    },
}
