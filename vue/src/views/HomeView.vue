<script setup>
import { ref } from 'vue'
import { defineStore } from 'pinia'
const currentUser = ref(null)
function useCurrentUser() {}
const useCurrentUserStore = defineStore(currentUser, useCurrentUser)
console.log(useCurrentUserStore)
</script>
//view = declarative rendering of the state, getters = computed properties , //actions = asynchronus
operations and ways to change the state,//state = what is stored to influence the view //State
management takes the same slot as components//

<template>
  <main></main>
</template>
