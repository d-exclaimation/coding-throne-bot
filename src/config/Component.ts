/**
 * author: rbrtbrnschn
 */
import { Record, Static } from 'runtypes'
import IComponentFunctionality from './interfaces/ICommandFunctionality'
import IComponent from './interfaces/IComponent'
import ComponentTypes from './interfaces/ITypes'

type Name = String | undefined
export default class ConfigComponent implements IComponent {
    functionality: IComponentFunctionality
    name: Name
    types: ComponentTypes;

    withName<T extends Name>(_name: T) {
        this.name = _name
        return this
    }
    withFunctionality<T extends IComponentFunctionality>(_functionality: T) {
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
