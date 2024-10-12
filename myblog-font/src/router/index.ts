import { createRouter, createWebHistory } from 'vue-router'
import useUserinfoStore from '@/stores/userInfo'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

// 路由守卫
// 判断是否登录
router.beforeEach((to, from, next) => {
  const userInfoStore = useUserinfoStore()
  // FIXME: 这里有一个问题就是，token会过期，所以需要重新登录
  // FIXME: 这里有莫名其妙的错误，暂时先注释掉 不进行to.name判断无法跳转
  if (!localStorage.getItem('token') && to.name === 'home') {
    next('/vistor')
  }
  else {
    next()
  }
})




export default router
