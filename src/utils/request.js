import axios from 'axios'
import CONSTANTS from '../constants'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  timeout: 60000, // request timeout
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.error(error) // for debug
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    let data = response.data || {}
    let code = data.code
    if (code === CONSTANTS.RESPONSE_CODE_SUCCESS) {
      return response.data
    } else {
      console.error(response) // for debug
      return Promise.reject(response.data)
    }
  },
  error => {
    console.error(error) // for debug
    return Promise.reject(error)
  }
)

export default service
