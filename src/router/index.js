import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import DemoView from '@/views/DemoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: 'project/:key',
    name: 'project',
    component: ProjectView
  },
  {
    path: 'project/:key/demo',
    name: 'demo',
    component: DemoView
  },
]

const router = new VueRouter({
  base: '/site/',
  mode: 'history',
  routes
})

export default router
