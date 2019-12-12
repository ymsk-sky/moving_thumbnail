<template>
  <div class="movie">
    <h3>Movie</h3>
    <div class="title">
      {{ item.title }}
    </div>
    {{ item }}
  </div>
</template>

<script>
export default {
  props: {
    item: []
  }
}
</script>

<style>
</style>
