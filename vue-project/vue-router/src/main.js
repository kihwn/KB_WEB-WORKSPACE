import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//createApp(App)과 app.mount('#app')을 바로 붙이지않음. router를 중간에 넣어주기 위해.
const app = createApp(App)

app.use(router)

app.mount('#app')
