<style lang="scss" scoped></style>
*/
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
    const confirmPassword = ref(null)
    const errorMsg = ref(null)
    const store = useMovieStores()
    // Register function
    const register = async () => {
      if (password.value === confirmPassword.value) {
        try {
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value
          })
          if (error) throw error
          router.push({ name: 'Login' })
        } catch (error) {
          errorMsg.value = error.message
          setTimeout(() => {
            errorMsg.value = null
          }, 5000)
        }
        return
      }
      errorMsg.value = 'Error: Passwords do not match'
      setTimeout(() => {
        errorMsg.value = null
      }, 5000)
    }
    async function signInWithEmail() {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
      })
      store.$patch({
        email: email.value,
        password: password.value
      })
    }
    return { email, password, confirmPassword, errorMsg, register }
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

  <div v-if="errorMsg">
    <p>{{ errorMsg }}</p>
  </div>
  <div>
    <form @submit.prevent="register" class="">
      <h1 class="">Register</h1>

      <div class="">
        <label for="email" class="">Email</label>
        <input type="text" required class="" id="email" v-model="email" />
      </div>

      <div class="">
        <label for="password" class="">Password</label>
        <input type="password" required class="" id="password" v-model="password" />
      </div>

      <div class="">
        <label for="confirmPassword" class="">Confirm Password</label>
        <input type="password" required class="" id="confirmPassword" v-model="confirmPassword" />
      </div>

      <button type="submit" class="">Register</button>
    </form>
  </div>
</template>
