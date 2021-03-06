import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import moment from 'moment'


const app = createApp(App)
app.config.globalProperties.$moment = moment
app.use(store).use(router).mount('#app')
