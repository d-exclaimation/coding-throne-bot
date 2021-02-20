/**
 * author: rbrtbrnschn
 */
import IComponentFunctionality from './interfaces/ICommandFunctionality'
import IComponent from './interfaces/IComponent'

type Name = String | undefined
export default class ConfigComponent implements IComponent {
    functionality: IComponentFunctionality
    name: Name

    withName(_name: Name) {
        this.name = _name
        return this
    }
    withFunctionality(_functionality: IComponentFunctionality) {
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
