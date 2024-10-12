import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";
import { type UserInfo } from "@/interface/user";

const useUserinfoStore = defineStore("userinfo", () => {
  const userinfo = reactive<UserInfo>({
    account: "",
    password: "",
    authorization: 0,
    token: "",
    id: 0,
    create_time: ''
  });
  const setUserInfo = (data: UserInfo) => {
    userinfo.account = data.account;
    userinfo.password = data.password;
    userinfo.authorization = data.authorization;
    userinfo.token = data.token;
    userinfo.id = data.id;
  };
  return {
    userinfo, setUserInfo
  }
})


export default useUserinfoStore