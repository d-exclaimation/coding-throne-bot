/**
 * author: rbrtbrnschn
 */

/*
    TODO: This was a dirty solution, given I had no clue how to do it better
    indexes can be any keys of type string
 */
export default interface ConfigInterface {
    [index: string]: Record<any, any>
}
