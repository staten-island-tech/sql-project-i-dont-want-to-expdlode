<template>
  <div></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
<!-- */
<script>
import { ref } from 'vue'
import { supabase } from '../supabase/init'
import { useRouter } from 'vue-router'
export default {
  name: 'LoginLogout',
  setup() {
    // Create data / vars
    const router = useRouter()
    const email = ref(null)
    const password = ref(null)
    const confirmPassword = ref(null)
    const errorMsg = ref(null)
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
    return { email, password, confirmPassword, errorMsg, register }
  }
}
</script>

<template>
  <h1>Login</h1>
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
 -->
