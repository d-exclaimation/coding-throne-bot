import Config from '../config'
import ConfigComponent from '../component'
import prefix from './bot/prefix'

const name = 'bot'
const subcomponents = [prefix]
const functionality = new Config().injectComponents(subcomponents)

export default new ConfigComponent()
    .withName(name)
    .withFunctionality(functionality)
