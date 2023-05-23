<template>
  <div class="card">
    <p>Th</p>
  </div>
</template>

<style>
.image {
  max-width: 200px;
  max-height: 200px;
}
</style>

<script>
export default {
  name: 'ExampleCard',
  data() {
    return {
      Selected: false
    }
  },
  props: {
    name: String
  }
}
</script>
