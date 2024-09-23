const routes = [
  {
    name: 'login',
    path: '/login',
    redirect: '/login/vistor',
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
    path: '/',
    component: () => import('@/views/home/index.vue')
  }
]

export default routes