/**
 * author: rbrtbrnschn
 */
import ConfigComponent from './Component'
import Config from './Config'

export default class ConfigBuilder {
    config: Config
    components: ConfigComponent[]
    constructor() {
        this.config = new Config()

        this.components = this.config.getComponents()
        this.withComponents(this.components)
    }
    withComponent(_component: ConfigComponent) {
        this.config.injectComponent(_component)
        return this
    }

    withComponents(_components: ConfigComponent[]) {
        _components.forEach((c) => this.withComponent(c))
        return this
    }

    build() {
        return this.config._
    }
}
