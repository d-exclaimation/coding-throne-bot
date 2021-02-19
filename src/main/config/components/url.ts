import ConfigComponent from '../component'
import Config from '../config'
import GithubComponent from './url/github'
import BlogComponent from './url/blog'

const name = 'url'
const functionality = new Config().injectComponents([
    GithubComponent,
    BlogComponent,
])

export default new ConfigComponent()
    .withName(name)
    .withFunctionality(functionality)
