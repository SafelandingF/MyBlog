import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import '@/fonts/yutong-BrR4G41P/result.css'
import '@/fonts/ChillRoundM-XOST5gyo/result.css'
import vue3lottie from 'vue3-lottie'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(vue3lottie)
app.mount('#app')

// TODO:由于改变了route模式，所以需要重新配置路由


