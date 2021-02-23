/**
 * author: rbrtbrnschn
 */
import ConfigComponent from "./Component"
import ConfigInterface from "./interfaces/IConfig"
import * as fs from "fs"
import * as path from "path"

export default class Config {
    componentDirectoryPath: string
    _: ConfigInterface
    constructor() {
        this.componentDirectoryPath = path.join(__dirname, "components")
        this._ = {} as ConfigInterface
    }

    /**
     * Injects a {@link ConfigComponent} into the config.
     */
    injectComponent(_component: ConfigComponent): ConfigInterface {
        const { _ } = this
        const { name, functionality } = _component
        // const _name = name

        // NOTE: name could be undefined if so, it should not proceed and adding into the records
        // unless this is intentional
        if (!name) return this._

        if (!_[name]) {
            _[name] = {}
        }

        _[name] = functionality
        return this._
    }

    /**
     * Injects each {@link ConfigComponent} in the given array.
     */
    injectComponents(_components: ConfigComponent[]): ConfigInterface {
        for (let component of _components) {
            this.injectComponent(component)
        }
        return this._
    }

    /**
     * Reads components root directory for top level components.
     */
    getComponents(): ConfigComponent[] {
        const componentDirectory = fs.readdirSync(this.componentDirectoryPath)

        let components: ConfigComponent[] = []
        for (let file of componentDirectory) {
            const filePath = path.join(this.componentDirectoryPath, file)
            const isFile = filePath.endsWith(".ts")

            if (!isFile) continue

            let component = require(filePath).default as ConfigComponent

            components.push(component)
        }
        return components
    }
}
