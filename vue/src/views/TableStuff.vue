<template>
  <div v-if="load" v-for="list in lists" :key="list.id">
    <h1>{{ list.id }}</h1>
    <h2>{{ list.title }}</h2>
    <h3>{{ list.release }}</h3>
    <p>{{ list.studio_id }}</p>
  </div>
</template>

<script setup>
let lists = ref(null)
let load = false
import { ref } from 'vue'
import { useMovieStores } from '../stores/MoviesStore'
const store = useMovieStores()
lists = store.supabase
load = true
</script>

<style scoped></style>
