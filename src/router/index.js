import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',    
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',    
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',    
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/signup',
    name: 'signup',    
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
