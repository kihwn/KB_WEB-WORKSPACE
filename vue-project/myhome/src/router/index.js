import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    },
    {
      //url ==> 특정 컴포넌트를 연결시키는 객체가 라우터다.
      path: '/logon', //이것을 만드는 순간 http://localhostL5173/logon
      name: 'logon',
      
      component: () => import('../views/LogonView.vue')
    }
  ]
})

export default router
