<template>
  <div v-if="store.loggedin">
    <div class="container" v-if="store.supabase !== null && lists !== ''">
      <CardStuff
        v-for="list in lists"
        :key="list.id"
        :id="list.id"
        :title="list.title"
        :release="list.release"
      ></CardStuff>
    </div>
    <div v-else>bleggghhhhhh</div>
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
import { useMovieStores } from '../stores/MoviesStore'
import { onBeforeMount, ref } from 'vue'
import CardStuff from '../components/CardStuff.vue'
const store = useMovieStores()
let load = false
let lists = ref('')
function getlist() {
  lists = store.supabase
  load = true
  return { lists, load }
}
onBeforeMount(() => {
  getlist()
})
// const remove = () => {
//   // let index = lists.findIndex((el) => el.title === )
//   // console.log(index)
// }
</script>

<style scoped>
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
