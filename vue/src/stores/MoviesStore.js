import { defineStore } from 'pinia'

export const useMovieStores = defineStore('MovieStore', {
  state: () => {
    return {
      supabase: []
    }
  },
  actions: {
    async fill() {
      this.supabase = (await import('@')).default
    }
  }
})
