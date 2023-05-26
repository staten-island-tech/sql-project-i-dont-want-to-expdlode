<style lang="scss" scoped></style>
<script>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'
import { useMovieStores } from '../stores/MoviesStore'

export default {
  name: 'LoginLogout',
  setup() {
    // Create data / vars
    const router = useRouter()
    const email = ref(null)
    const password = ref(null)
    const store = useMovieStores()
    const signInWithEmail = async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
      })
      store.$patch({
        email: email.value,
        password: password.value
      })
    }
    const signOut = async () => {
      let { error } = await supabase.auth.signOut()
      store.$reset()
    }
    return { email, password, signInWithEmail, signOut }
  }
}
</script>

<template>
  <form @submit.prevent="signInWithEmail">
    <h1>Login</h1>
    <div class="">
      <label for="email" class="">Email</label>
      <input type="text" required class="" id="email" v-model="email" />
    </div>

    <div class="">
      <label for="password" class="">Password</label>
      <input type="password" required class="" id="password" v-model="password" />
    </div>
    <button type="submit" class="">Login</button>
  </form>
</template>
