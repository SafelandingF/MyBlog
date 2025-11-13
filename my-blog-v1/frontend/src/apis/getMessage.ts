import http from "@/utils/http";

export const getMessageAPI = () => {
  return http.get('/message/getmessage')
}
export const getCommentAPI = (params: object) => {
  return http.get('message/getcomment', params)
}

export const submitCommentAPI = (params: object) => {
  return http.post('/message/addcomment', params)
}