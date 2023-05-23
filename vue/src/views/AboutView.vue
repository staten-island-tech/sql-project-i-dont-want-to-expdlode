<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <ExampleCard v-for="movie in movieStore.movies" :key="movie.name"></ExampleCard>
</template>

<style></style>
<script setup>
import { useMovieStores } from '../stores/MoviesStore'
import ExampleCard from '../ExampleCard.vue'
const movieStore = useMovieStores()
console.log(movieStore)
</script>
