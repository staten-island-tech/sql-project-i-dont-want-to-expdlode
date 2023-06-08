import { defineStore } from 'pinia'

export const useMovieStores = defineStore('MovieStore', {
  state: () => {
    return {
      supabase: null,
      email: null,
      password: null,
      loggedin: true,
      reviewGiven: false
    }
  },
  actions: {
    async fill() {
      this.supabase = (await import('../supabase')).default
    }
  }
})
