/**
 * author: rbrtbrnschn
 */
import IComponentFunctionality from './ICommandFunctionality'

export default interface IComponent {
    name: String | undefined
    functionality: IComponentFunctionality
}
