import Vue from 'vue'
import VueRouter from 'vue-router'
import Sidebar from '../views/Sidebar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Sidebar
  },
  {
    path: '/:mode/:id',
    name: 'Sidebar',
    component: Sidebar
  },
]

const router = new VueRouter({
  routes
})

export default router
