import http from "@/utils/http"
export const getUserinfoAPI = () => {
  return http.get('/user')
}
