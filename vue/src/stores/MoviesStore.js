import { defineStore } from 'pinia'

export const useMovieStores = defineStore('MovieStore', {
  state: () => {
    return {
      supabase: null,
      email: null,
      password: null
    }
  },
  actions: {
    async fill() {
      this.supabase = (await import('../supabase')).default
    }
  }
})
