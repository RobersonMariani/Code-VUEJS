import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

import Habilidades from '@/views/Habilidades.vue'
import Sobre from '@/views/Sobre.vue'
import Status from '@/views/Status.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: 'habilidades', component: Habilidades },
        { path: 'sobre', component: Sobre },
        { path: 'status', component: Status },
      ]
    },
  ]
})

export default router
