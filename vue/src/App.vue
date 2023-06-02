<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { supabase } from './supabase'
import { useMovieStores } from './stores/MoviesStore'
const store = useMovieStores()
async function readStores() {
  let { data: Movies, error } = await supabase.from('Movies').select('*')

  store.$patch((state) => {
    state.supabase = Movies
  })

  if (error) throw new Error(error)
}
readStores()
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/table">Data</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  color: white;
}
a {
  color: #bff5fd;
  padding: 5px;
}
</style>
