<template>
  <div class="movie">
    <h4>{{ item.title }}</h4>
    <a :href="`https://nico.ms/${item.contentId}`" target="_blank" rel="noopener noreferrer">
      <img :src="item.thumbnailUrl" :alt="item.title">
    </a>
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
