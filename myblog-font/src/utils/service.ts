import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
})


//! 在请求拦截器处设置请求头的token
service.interceptors.request.use(config => {
  if (localStorage.getItem('Token')) {
    config.headers['token'] = localStorage.getItem('token')
    return config
  }
  return config
}, err => {
  console.log(err)
  return Promise.reject(err)
})


//! 响应拦截器 但还不知道能用来干什么
service.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err)
  return Promise.reject(err)
}
)

export default service