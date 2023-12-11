import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import DownloadFile from '../components/DownloadFile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/resume.pdf',
    name: 'DownloadFile',
    component: DownloadFile
    }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
