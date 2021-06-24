import 'dotenv/config'

export default {
  name: 'rate-repository-app',
  extra: {
    env: process.env.ENV,
    uri: process.env.uri
  }
}