<template>
  <div v-if="store.loggedin" class="container">
    <div id="card" v-for="list in lists" :key="list.id">
      <h1>{{ list.id }}</h1>
      <h2>{{ list.title }}</h2>
      <h3>{{ list.release }}</h3>
      <form>
        <input type="text" />
        <input type="submit" value="Review" @click="upvote" />
      </form>
    </div>
  </div>
  <div class="invalid" v-else>
    <RouterLink to="/login">Login</RouterLink>
    <p>or</p>
    <RouterLink to="/register">Register</RouterLink>
    <p>to view this!</p>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { supabase } from '../supabase'

let lists = ref(null)
import { ref } from 'vue'
import { useMovieStores } from '../stores/MoviesStore'
const store = useMovieStores()
lists.value = store.supabase
const upvote = function (event) {
  event.preventDefault()
  console.log()
}
</script>

<style scoped>
#card {
  background-color: white;
  width: 15rem;
  height: 15rem;
  margin: 1vh;
  text-align: center;
  padding: 5vh;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
.invalid {
  display: flex;
}
.invalid p {
  margin: auto 3px;
  color: white;
}
a {
  color: #bff5fd;
}
</style>
