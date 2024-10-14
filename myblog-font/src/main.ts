

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vue3lottie from 'vue3-lottie'




const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

app.use(vue3lottie)

app.use(ElementPlus)


app.mount('#app')
