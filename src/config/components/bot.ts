import Config from "../Config"
import ConfigComponent from "../Component"
import prefix from "./bot/prefix"

const name = "bot"
const subcomponents = [prefix]
const functionality = new Config().injectComponents(subcomponents)

export default new ConfigComponent()
    .withName(name)
    .withFunctionality(functionality)
