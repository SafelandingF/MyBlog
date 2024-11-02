import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import useUserinfoStore from '@/stores/userInfo'
import routes from './routes'

// FIXME:这里路由好像换成另一种更好

/**
 * 
 * 
 *  在hash模式下，前端路由修改的是#中的信息，而游览器请求时是不带它玩的，所以没有问题。但是在history下，你可以自由的修改path，当刷新时，如果服务器中没有相应的响应或资源，会分分钟刷出一个404来。

   history模式改变url的方式会导致游览器向服务器发送请求，这不是我们想看到的，我们需要在服务器端做处理：如果匹配不到任何静态资源，则应该始终返回同一个html页面。

   使用history模式还有一个问题就是，在访问二级页面的时候，做刷新操作，会出现404错误，那么就需要和后端配合让他配置一下apache或是nginx的url重定向，重定向到你的首页路由上就ok啦。

 */
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
