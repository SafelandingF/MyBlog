import service from "./service";

const http = {
  /**
  * method: 请求方法
  * url: 请求地址
  * @params: 请求参数
  * @params: object
  }
  */

  get(url: string, params?: object) {
    const config = {
      method: 'get',
      url: url,
      params: params ? params : {}
    }
    return service(config)
  },
  post(url: string, params?: object) {
    const config = {
      method: 'post',
      url: url,
    }
    //@ts-ignore
    if (params) config.data = params
    return service(config)
  },
  put(url: string, params?: object) {
    const config = {
      method: 'put',
      url: url,
      params: params ? params : {}
    }
    return service(config)
  },
  delete(url: string, params?: object) {
    const config = {
      method: 'delete',
      url: url,
      params: params ? params : {}
    }
    return service(config)
  }
}

export default http;