import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import firebaseServices from '../firebase'
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
    component: Dashboard,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/signup',
    name: 'signup',    
    component: () => import('../views/SignUp.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next)=>{
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const {auth} = firebaseServices
  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
