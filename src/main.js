import { createApp } from 'vue'
import './style.css'
import App from './App_user.vue'
import router from './router_user'

createApp(App)
  .use(router)
  .mount('#app')
