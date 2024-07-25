import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../App.vue')
    },
    {
      path: '/test1',
      name: 'test1',
      component: () => import('../components/Test1.vue')
    },
    {
      path: '/test2',
      name: 'test2',
      component: () => import('../components/Test2.vue')
    }
  ]
})

export default router
