import config from '../config'
import fetch from 'node-fetch'
class MyRequest {
  constructor({ url = "", baseUrl = config.baseUrl, params = {} }) {
    this.url = url
    this.baseUrl = baseUrl
    this.params = params
  }

  fetch() {
    let result = {
      code: 0,
      msg: '',
      data: ''
    }
    return new Promise((reslove, reject) => {
      let url = this.baseUrl + this.url
      if (config.mock) {
        url = url + '.json'
      }
      fetch(url)
        .then(res => res.json())
        .then(json => {
          result.data = json
          reslove(result)
        }).catch(err => {
          result.code = 1
          result.msg = 'fetch error'
          reject(result)
        })
    })
  }
}

export default MyRequest