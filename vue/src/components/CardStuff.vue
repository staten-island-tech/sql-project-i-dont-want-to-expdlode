<template>
  <div id="card">
    <h1>{{ id }}</h1>
    <h2>{{ title }}</h2>
    <h3>{{ release }}</h3>
    <button>Remove</button>
  </div>
</template>

<script>
// import { lists } from '../views/TableStuff.vue'
export default {
  name: 'CardStuff',
  props: {
    id: Number,
    title: String,
    release: Number
  }
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
</style>
