import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginLogout from '../views/LoginLogout.vue'
import RegisterAcc from '../views/RegisterAcc.vue'
import TableStuff from '../views/TableStuff.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'loginlogut',
      component: LoginLogout
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
      path: '/register',
      name: 'registeracc',
      component: RegisterAcc
    },
    {
      path: '/table',
      name: 'tables',
      component: TableStuff
    }
  ]
})

export default router
