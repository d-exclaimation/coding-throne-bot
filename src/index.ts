import * as dotenv from 'dotenv'
dotenv.config()
import * as path from 'path'
import { Client } from '@typeit/discord'

async function make() {
    const client = new Client({
        classes: [
            path.join(__dirname, 'eventHandlers', '*.ts'),
            path.join(__dirname, 'eventHandlers', '*.js'),
            path.join(__dirname, 'commands', '*', '*.ts'),
            path.join(__dirname, 'commands', '*', '*.ts'),
            path.join(__dirname, 'commands', '*', '*.js'),
            path.join(__dirname, 'commands', '*', '*.js'),
        ],
        silent: false,
        variablesChar: ':',
    })

    await client.login(process.env.DISCORD_BOT_TOKEN as string)
    return client
}

export default make()
