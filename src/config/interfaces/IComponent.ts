/**
 * author: rbrtbrnschn
 */
import ConfigComponentFunctionalityInterface from './ICommandFunctionality'

export default interface ConfigComponentInterface {
    name: String | undefined
    functionality: ConfigComponentFunctionalityInterface
}
