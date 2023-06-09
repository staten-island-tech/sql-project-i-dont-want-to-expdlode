<script setup>
import { ref } from 'vue'
import { defineStore } from 'pinia'
const currentUser = ref(null)
function useCurrentUser() {}
const useCurrentUserStore = defineStore(currentUser, useCurrentUser)
console.log(useCurrentUserStore)
</script>

<template>
  <div><p>please dont fail us</p></div>
</template>
<style scoped>
p {
  color: white;
}
</style>
