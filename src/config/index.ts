/**
 * author: rbrtbrnschn
 */
import ConfigBuilder from "./builder"

const config = new ConfigBuilder().build()
console.log("Current config:\n", config)

export default config
