import './bootstrap'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '../css/app.css'

import 'aos/dist/aos.css'
import AOS from 'aos'

import navHome from '@/components/navHome.vue'
import footerHome from '@/components/footerHome.vue'
AOS.init()

const app = createApp(App)

app.component('nav-home', navHome)
app.component('footer-home',footerHome)

app.use(router)

app.mount('#app')
