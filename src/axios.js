'use strict'

import axios from 'axios'

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkCode (res,apiCode) {
  if(res.data != "0000"){
    return false
  }else {
    return res.data[apiCode]
  }
}

export default {
  post (url, dataObj) {
    return axios({
      method: 'post',
      baseURL: '',
      url,
      data: dataObj,
      timeout: 10000,
      responseType: 'json',
    }).then(
      (res) => {
        return res
      }
    )
  }
}
