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
    },//404에서 띄우기
    {
      path:"/:pathMatch(.*)*", //정규식을 이용해서 위에서 처리하지 않는 url들은 모두 여기서 처리한다. 
      redirect:"/notFound" //redirect -> 전부 다른 곳으로 보낸다
    },
    {
      path:"/notFound", //RouteLink to="/notFound" 단순하게 보낼 때
      name:"notFound", //RouteLink :to={name:"/notFound"} 보낼 정보가 따로 있을 때
      component:()=> import('../views/NotFound.vue')
    },
    {
      path:"/notFound",
      name:"notFound",
      component:()=>import('../views/NotFound.vue')
    },
    {
      path:"/slot",
      name:"/slot",
      component:() => import('../views/ScoreView.vue')
    },
    {
      path: "/board/list/:page",//http://localhost:5173/board/list/1
      name:"board/list",
      component:()=>import('../views/BoadrListView/vue')
    }
  ]
})

//about 컴포넌트가 로그온을 해야 들어갈 수 있도록 하자 (네비게이션 가드 활용)
//반드시 로그온을 해야 할 라우터들을 추가 해야 한다. 
const needLogin = ['/about'];

//네비게이션 가드는 일종의 보안장치로 라우터를 제어할 수 있다.
//특정 동착을 수행한 후 라우팅에 들어갈 수 있다.

router.beforeEach ((to,from)=>{
  //to는 내가 가고싶은 곳, from은 현재. from에서 to로 갈 때 beforeEach를 확인하게 된다. 
  //라우터 링크를 하면 이동 전에 여기를 먼저 지나간다.
  //이 부분을 통과해야 router로 이동할 수 있다.
  console.log(`router :${from.path} ===> ${to.path}`);
  //needLogin에 지정한 url만
  let userid = sessionStorage.getItem("userid");
  if(to.meta.requireAuth && !userid){
    //새로운 url로 보낸다. 여기서는 로그온 페이지로 전송한다. 
    return {path:"/logon", query:{to:to.path}};
    //path: 이동한 정보
    //query: 로그인 후 다시 호출하 페이지 정보를 줘서 /about로 이동하게
    //1. /about ==> 보안 때문에 /logon ==> 다시 /about로 이동해야한다.
    //http://localhost:5173/logon?to=/about
  }
});
export default router
