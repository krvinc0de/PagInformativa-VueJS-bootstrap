import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Premios from '../views/Premios.vue'
import Organizadores from '../views/Organizadores.vue'
import Viaje from '../views/Viaje.vue'
import Botella from '../views/Botella.vue'
import Carton from '../views/Carton.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/premios',
    name: 'Premios',
    component: Premios
  },
  {
    path: '/Organizadores',
    name: 'Organizadores',
    component: Organizadores
  },
  {
    path: '/Viaje',
    name: 'Viaje',
    component: Viaje
  },
  {
    path: '/Botella',
    name: 'Botella',
    component: Botella
  },
  {
    path:'/Carton',
    name: 'Carton',
    component: Carton
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
