import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueParticles from 'vue-particles'



createApp(App).use(router).use(store).use(VueParticles).mount('#app')
