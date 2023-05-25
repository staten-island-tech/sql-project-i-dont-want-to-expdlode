import { defineStore } from 'pinia'

export const useMovieStores = defineStore('MovieStore', {
  state: () => {
    return {
      supabase: [],
      login: [
        {
          email: '',
          password: ''
        }
      ]
    }
  },
  actions: {
    async fill() {
      this.supabase = (await import('../supabase')).default
    }
  }
})
