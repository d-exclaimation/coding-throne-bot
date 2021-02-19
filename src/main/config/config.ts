/**
 * author: rbrtbrnschn
 */
import ConfigComponent from './component'
import ConfigInterface from './configInterface'
import * as fs from 'fs'
import * as path from 'path'

export default class Config {
    componentDirectoryPath: string
    _: ConfigInterface
    constructor() {
        this.componentDirectoryPath = path.join(__dirname, 'components')
        this._ = {} as ConfigInterface
    }

    /**
     * Injects a {@link ConfigComponent} into the config.
     * @param {ConfigComponent} _component - any component
     * @returns {Config}
     */
    injectComponent(_component: ConfigComponent) {
        const { _ } = this
        const { name, functionality } = _component
        const _name = name.toString() // due to typing mismatches String != string // TODO please fix if you know how

        if (!_[_name]) {
            _[_name] = {}
        }

        _[_name] = functionality
        return this._
    }

    /**
     * Injects each {@link ConfigComponent} in the given array.
     * @param {ConfigComponent[]} _components
     */
    injectComponents(_components: ConfigComponent[]) {
        for (let component of _components) {
            this.injectComponent(component)
        }
        return this._
    }

    /**
     * Reads components root directory for top level components.
     * @returns {ConfigComponent[]}
     */
    getComponents() {
        const componentDirectory = fs.readdirSync(this.componentDirectoryPath)

        let components = []
        for (let file of componentDirectory) {
            const filePath = path.join(this.componentDirectoryPath, file)
            const isFile = filePath.endsWith('.ts')

            if (!isFile) continue

            const component = require(filePath).default

            components.push(component)
        }
        return components
    }
}
