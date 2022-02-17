import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/element',
    name: 'ElementPlus',
    component: () => import('@/views/element.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue')
  },
  {
    path: '/scss',
    name: 'Scss',
    component: () => import('@/views/scss.vue')
  },
  {
    path: '/test',
    name: 'TestUtil',
    component: () => import('@/views/my-test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
