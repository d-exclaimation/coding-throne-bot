import ConfigComponent from '../../Component'
import PrefixHandler from './prefix/handler'
import { Record, String, Number, Static } from 'runtypes'

const name = 'prefix';

type Prefix = Static<typeof String>;

export default new ConfigComponent()
    .withName(name)
    .withFunctionality(PrefixHandler.prefixFor(process.env.NODE_ENV));
