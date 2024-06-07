import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
const pinia = createPinia();
const app = createApp(App)

app.use(pinia) //새로 미들웨어를 추가해준다
app.use(router)

app.mount('#app')
