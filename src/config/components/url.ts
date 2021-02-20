import ConfigComponent from '../Component'
import Config from '../Config'
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
