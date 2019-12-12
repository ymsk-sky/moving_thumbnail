import Vue from 'vue'
import VueRouter from 'vue-router'
import Ranking from '../views/Ranking.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Ranking
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
