
const routes = [

  //登录路由
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

  //首页路由
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/index.vue')
  },

  //404路由
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404/index.vue')
  },





  //查看文章路由
  {
    name: 'article',
    path: '/detail-article/:id',
    component: () => import('@/views/detail/article-detail.vue')
  },
  //查看笔记详细路由
  {
    name: 'note',
    path: '/detail-note/:id',
    component: () => import('@/views/detail/note-detail.vue')
  },




  //编辑文章总页
  {
    name: 'edit-article',
    path: '/edit-article',
    //@ts-ignore
    component: () => import('@/views/edit/article/index.vue')
  },
  {
    name: 'edit-article-id',
    path: '/edit-article/:id',
    //@ts-ignore
    component: () => import('@/views/edit/article/components/edit-detail.vue')
  },
  {
    name: 'add-article',
    path: '/add-article',
    //@ts-ignore
    component: () => import('@/views/edit/article/components/add-article.vue')
  },
  {
    name: 'edit-note',
    path: '/edit-note',
    //@ts-ignore
    component: () => import('@/views/edit/note/index.vue')
  },
  {
    name: 'edit-note-id',
    path: '/edit-note/:id',
    //@ts-ignore
    component: () => import('@/views/edit/note/components/detail.vue')
  },





  //错误路由
  {
    path: '/:catchAll(.*)', // 匹配所有路由，当没有匹配到路由时，跳转到404页面
    redirect: '/404'
  },




]

export default routes