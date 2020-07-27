const { join } = require('path')
const config = {
  port: "3000",
  staticSrc: join(__dirname, '../../', 'public'),
  viewSrc: join(__dirname, '../../', 'views'),
  baseUrl: `http://localhost:3000/mock`,
}

if (process.env.NODE_ENV === 'development') {
  config.port = '3000'
  config.baseUrl = 'http://localhost:3000/mock'
  config.mock = true
}
if (process.env.NODE_ENV === 'production') {
  config.port = '5320'
  // config.baseUrl = '/api'


  //test
  config.baseUrl = 'http://localhost:5320/mock'
  config.mock = true
}
export default config