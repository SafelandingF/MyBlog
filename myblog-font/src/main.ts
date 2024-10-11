

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vue3lottie from 'vue3-lottie'

const app = createApp(App)

app.use(createPinia())
app.use(vue3lottie)
app.use(router)
app.use(ElementPlus)


app.mount('#app')
