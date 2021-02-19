/**
 * author: rbrtbrnschn
 */
import ConfigComponentFunctionalityInterface from './componentFunctionalityInterface'
import ConfigComponentInterface from './componentInterface'

export default class ConfigComponent implements ConfigComponentInterface {
    functionality
    name: String

    withName(_name: String) {
        this.name = _name
        return this
    }
    withFunctionality(_functionality: ConfigComponentFunctionalityInterface) {
        this.functionality = _functionality
        return this
    }

    withComponent(subComponent: ConfigComponent) {
        const { name, functionality } = subComponent
        this.withName(name)
        this.withFunctionality(functionality)


        return this
    }
}
