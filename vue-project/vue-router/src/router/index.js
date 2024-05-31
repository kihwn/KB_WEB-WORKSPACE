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
      // 지연로딩 : 천천히 불러오다. 모든 것이 메모리에 한 번에 올라가는 것이 아니라 지연되어 올라가게 됨. 
    },
    {
      path:'/counter',
      name: "counter",
      component: () => import("../views/CounterView.vue")
    },
    {
      path:'/score',
      name: "score",
      component: () => import("../views/ScoreView.vue")
    },
    {
      path:'/person/:name/:age',
    
      component: () => import("../views/PersonView.vue")
    },
    {
      path:'/members',
    
      component: () => import("../views/MemberView.vue")
    }

]
})

export default router;
//export에 default가 붙어있으면 하나의 객체만 내보낼 수 있음. 
