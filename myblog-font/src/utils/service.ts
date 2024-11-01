import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
})


//! 在请求拦截器处设置请求头的token


/*
  @ 我们在拦截器部分设置请求体token即可 
  @ 并不需要在这一步判断路由条件
  @ 在route中处理有无token的情况
*/
service.interceptors.request.use(config => {

  if (localStorage.getItem('token')) {
    config.headers['authorization'] = localStorage.getItem('token')
  }
  else {
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