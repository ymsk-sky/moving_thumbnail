<template>
  <div class="movie">
    <div class="title">
      <p>title: {{ item.title }}</p>
    </div>
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
