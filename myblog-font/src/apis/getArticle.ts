import http from "@/utils/http";

export const getEssayAPI = () => {
  return http.get('/article/getarticle')
}

export const getEssayDetailAPI = (params: object) => {
  return http.get('/article/getarticledetail', params)
}

export const editEssayAPI = (params: object) => {
  return http.post('/article/editarticle', params)
}

export const addEssayAPI = (params: object) => {
  return http.post('/article/addarticle', params)
}