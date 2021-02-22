/**
 * author: rbrtbrnschn
 */
import IComponentFunctionality from "./ICommandFunctionality"
import ComponentTypes from "./ITypes"

export default interface IComponent {
    name: String | undefined
    types: ComponentTypes
    functionality: IComponentFunctionality
}
