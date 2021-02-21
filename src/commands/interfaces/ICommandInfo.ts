export default interface ICommandInfo {
    prefix: string
    description?: string
    category?: string // TODO Should be enum of sorts, feel free to create
    permissions?: any // TODO should be enum of sorts, feel free to create
    // etc
}
