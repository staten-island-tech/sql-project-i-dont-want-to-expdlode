import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()
app.use()
app.use(router).use(pinia)

app.mount('#app')

import { defineStore } from 'pinia'

export const userSessionStore = defineStore({
  id: 'userSession',
  state: () => ({
    session: null
  })
})
