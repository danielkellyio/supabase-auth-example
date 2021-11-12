import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  { 
    name: 'Home',
    path: '/', 
    component: ()=> import('@/pages/Home.vue') 
  },
  { 
    name: 'Me',
    path: '/me', 
    component: ()=> import('@/pages/Me.vue') 
  },
  { 
    name: 'Login',
    path: '/login', 
    component: ()=> import('@/pages/Login.vue') 
  },
  { 
    name: 'Register',
    path: '/register', 
    component: ()=> import('@/pages/Register.vue') 
  },
]

export default createRouter({
  history: createWebHistory(),
  routes, 
})