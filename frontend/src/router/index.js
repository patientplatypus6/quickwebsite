import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProposalView from '../views/ProposalView.vue'
import HardwareView from '../views/HardwareView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/proposal',
      name: 'proposal',
      component: () => import('../views/ProposalView.vue')
    }, 
    {
      path: '/hardware', 
      name: 'hardware', 
      component: () => import('../views/HardwareView.vue') 
    }
  ]
})

export default router
