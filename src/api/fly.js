import { Message } from 'element-ui'
const Fly = require('flyio/dist/npm/fly')
const fly = new Fly()

if (process.env.NODE_ENV === 'development') {
  fly.config.baseURL = '/'
}
// 添加请求拦截器
fly.interceptors.request.use(request => {
  request.headers['Accept'] = 'application/json'
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  response => {
    const res = response.data
    return res.data
  },
  error => {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 401:
        error.message = '登录超时'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        break
      case 405:
        error.message = '请求方法未允许'
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        Message({
          message: '服务器内部错误',
          type: 'error'
        })
        break
      case 501:
        error.message = '网络未实现'
        break
      case 502:
        error.message = '网络错误'
        break
      case 503:
        Message({
          message: error.message,
          type: 'error'
        })
        break
      case 504:
        error.message = '网络超时'
        break
      case 505:
        error.message = 'http版本不支持该请求'
        break
      default:
        Message({
          message: `连接错误${error.response.status}`,
          type: 'error'
        })
    }
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default fly
