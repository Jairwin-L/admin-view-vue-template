const Fly = require('flyio/dist/npm/fly')
const fly = new Fly()

class ApiError extends Error {
  constructor (code, msg) {
    super(msg)
    this.code = code
    this.msg = msg
  }
}

// 添加请求拦截器
fly.interceptors.request.use((request) => {
  request.headers['Authorization'] = 'Bearer ' + localStorage.token
  request.headers['Accept'] = 'application/json'
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  response => {
    let data = response.data
    if (data) {
      if (response.request.url.endsWith('.json')) {
        return data
      }
      if (data.code === 0) {
        return data.data
      } else {
        return Promise.reject(new ApiError(data.code, data.msg))
      }
    } else {
      return Promise.reject(new ApiError(9999, '响应错误'))
    }
  },
  err => {
    let msg = err.message || '网络错误'
    return Promise.reject(new ApiError(9999, msg))
  }
)
fly.config.baseURL = '/'

export default fly
