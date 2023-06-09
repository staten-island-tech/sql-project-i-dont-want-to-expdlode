<template>
  <div v-if="store.loggedin">
    <form @submit.prevent="upsert" class="box">
      <div>
        <label for="inp2">Title: </label>
        <input type="text" ref="input2" id="inp2" required />
      </div>
      <div>
        <label for="inp1">Year Released: </label>
        <input type="text" ref="input" id="inp1" required />
      </div>
      <div>
        <label for="studios">Studio ID: </label>
        <select name="studios" id="studios" ref="input3">
          <option value="STUDIO">STUDIO</option>
          <option value="PIXAR1">PIXAR1</option>
          <option value="DISNEY">DISNEY</option>
          <option value="MARVEL">MARVEL</option>
          <option value="LUCASF">LUCASF</option>
        </select>
      </div>
      <div><button>Submit</button></div>
    </form>
    <div class="container" v-if="store.supabase !== null && lists !== ''">
      <div v-for="(list, index) in lists" id="card">
        <h2>{{ list.title }}</h2>
        <h3>{{ list.release }}</h3>
        <button @click.once="remove(list)">Remove</button>
      </div>
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
import { useMovieStores } from '../stores/MoviesStore'
import { ref, onMounted } from 'vue'
const store = useMovieStores()
let lists = ref('')
const input = ref('')
const input2 = ref('')
const input3 = ref(null)

async function readStores() {
  let { data: Movies, error } = await supabase.from('Movies').select('*')

  store.$patch((state) => {
    state.supabase = Movies
  })
  lists = store.supabase
  if (error) throw new Error(error)
}
readStores()

const upsert = async () => {
  const { data, error } = await supabase
    .from('Movies')
    .insert([{ title: input2.value, release: input.value, studio_id: input3.value }])
  alert('Refresh the page to see the updated info!')
  return { data, error }
}

const remove = async (e) => {
  const { data, error } = await supabase.from('Movies').delete().eq('id', e.id)
  alert('Refresh the page to see the updated info!')
  return { data, error }
}
</script>

<style scoped>
#card {
  background-color: white;
  width: 15rem;
  height: 15rem;
  margin: 1vh;
  text-align: center;
  padding: 2rem;
}

.box {
  color: white;
  margin: 1rem auto;
}

.box div {
  margin: 1vh;
}
.container {
  display: flex;
  flex-wrap: wrap;
  margin: 1vh 5.5%;
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
