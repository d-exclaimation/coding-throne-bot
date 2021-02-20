/**
 * author: rbrtbrnschn
 */
import ConfigBuilder from './builder'

const config = new ConfigBuilder().build()
console.log('Current config')
console.log(config)

export default config
