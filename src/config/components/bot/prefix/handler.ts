import Prefixes from "./Prefixes"
// Singleton
class PrefixHandler {
    prefixes: Map<string, string>

    constructor(prefixes) {
        this.prefixes = prefixes
    }
    prefixFor(node_env) {
        const hasKey = this.prefixes.has(node_env)

        if (!hasKey) return Prefixes.available.dev

        try {
            return this.prefixes.get(node_env)
        } catch (err) {
            console.error(`${__dirname}/${__filename}`)
            console.error(err)
        }
    }
}

const prefixHandler = new PrefixHandler(new Prefixes().get())
export default prefixHandler
