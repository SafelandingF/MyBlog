/**
 * @ 在这里定义一些接口类型
 */

export interface UserInfo {
  account: string,
  password: string,
  id: number,
  create_time: string,
  authorization: number,
  token: string
}

export interface LoginResData {
  result: UserInfo,
  mesaage: string,
  token: string,
}



