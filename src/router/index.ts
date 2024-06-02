import { createRouter, createWebHistory } from 'vue-router'
import TaskView from '../views/TaskView.vue'
import HomeView from '../views/HomeView.vue'
import ListView from '@/components/Liste/ListView.vue'
import FilesView from '@/components/Files/FilesView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TaskView
    },
    {
      path: '/tasks/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/tasks/file',
      name: 'file',
      component: FilesView
    }
  ]
})

export default router
