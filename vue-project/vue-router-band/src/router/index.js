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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/member',
      name:'member',
      component: () => import("../views/MemberView.vue")
    },
    {
      path:'/notFound',
      name:'notFound',
      component: () => import('../views/NotFound.vue')
    },
    {
      path:'/:pathMatch(.*)*',
      redirect:'/notFound'
    },
    {
      path:'/video', 
      name:'video', 
      component: () => import("../views/VideoView.vue")
    }
  ]
})

export default router
