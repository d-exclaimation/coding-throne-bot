import ConfigComponent from '../../Component'
import PrefixHandler from './prefix/handler'
const name = 'prefix'

function functionality() {
    const { NODE_ENV } = process.env
    return PrefixHandler.prefixFor(NODE_ENV)
}

export default new ConfigComponent()
    .withName(name)
    .withFunctionality(functionality())
