<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style></style>
<script setup>
import { useMovieStores } from '../stores/MoviesStore'
import { supabase } from '../supabase'

const movieStore = useMovieStores()
console.log(supabase)
console.log(movieStore)
</script>
