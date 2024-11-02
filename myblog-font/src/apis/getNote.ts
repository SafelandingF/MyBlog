import http from "@/utils/http";

export const getNoteAPI = () => {
  return http.get('/note/getNote')
}

export const addNoteAPI = (params: object) => {
  return http.post('/note/addnote', params)
}

export const getNoteDetailAPI = (params: object) => {
  return http.get('/note/getnotedetail', params)
}

export const editNoteAPI = (params: object) => {
  return http.post('/note/editnote', params)
}