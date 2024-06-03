//import './assets/main.css'
//부트스트랩을 위해서 두 개의 모듈이 import 되어야 한다
//모듈을 로딩할 때 './ 가 없는 이유는 node_modules 폴더에 있는
//모듈은 그냥 모듈명으로 시작해야 한다.
//굳이 경로를 지정하지 않는다. 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
