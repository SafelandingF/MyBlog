const routes = [
  {
    name: 'login',
    path: '/',
    redirect: '/vistor',
    children: [
      {
        name: 'vistor',
        path: 'vistor',
        component: () => import('@/views/login/index.vue')
      },
      {
        name: 'myself',
        path: 'myself',
        component: () => import('@/views/login/password.vue')
      }
    ]
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/index.vue')
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404/index.vue')
  },


  //动态路由 应该是先选择要修改的 再修改
  {
    name: 'edit-article',
    path: '/edit-article',
    component: () => import('@/views/edit/article/index.vue')
  },
  {
    path: '/:catchAll(.*)', // 匹配所有路由，当没有匹配到路由时，跳转到404页面
    redirect: '/404'
  },
]

export default routes