/* IMPORTS */
const fs = require("fs")
const path = require("path")

/**
 * Map of all available commands.
 * @returns {Map} commands
 */
function listCommands__outer() {
    let availableCommands = new Map()
    const commandsDirectory = path.join(__dirname, "/../commands")

    listCommands__inner(commandsDirectory)

    /**
     * Helper function, iterating over each file in given `_path`.
     * @param {string} _path path to iterate over
     */
    function listCommands__inner(_path) {
        try {
            const dir = fs.readdirSync(_path)

            for (file of dir) {
                const isFile = fs.lstatSync(path.join(_path, file)).isFile()

                if (!isFile) {
                    const newPath = path.join(_path, file)
                    listCommands__inner(newPath)
                    continue
                }

                const isCommand =
                    isFile && path.join(_path, file).endsWith(".js")
                const command = require(path.join(_path, file))

                if (isCommand) {
                    availableCommands.set(command.name, command)
                } else {
                    throw new Error(
                        "found file that's not a command aka != .js"
                    )
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    return availableCommands
}
module.exports = listCommands__outer
