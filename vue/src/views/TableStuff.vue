<template>
  <div v-for="list in lists">
    <h1>{{ list.id }}</h1>
    <h2></h2>
  </div>
</template>

<script setup>
let lists = ref('')
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useMovieStores } from '../stores/MoviesStore'
const store = useMovieStores()
async function readStores() {
  let { data: Movies, error } = await supabase.from('Movies').select('*')

  store.$patch((state) => {
    state.supabase = Movies
  })

  if (error) throw new Error(error)

  return (lists = store.supabase)
}
readStores()
</script>

<style scoped></style>
