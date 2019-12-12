<template>
  <div class="ranking">
    <h1>Ranking</h1>
    <div class="grid">
      <Movie
        class="grid__item"
        v-for="movie in movies"
        :key="movie.contentId"
        :item="movie"
      />
    </div>
  </div>
</template>

<script>
import Movie from '../components/Movie.vue'

export default {
  components: {
    Movie
  },
  data () {
    return {
      movies: []
    }
  },
  methods: {
    async fetchMovies () {
      const response = await this.axios.get('https://api.search.nicovideo.jp/api/v2/video/contents/search', {
        params: {
          q: 'ゲーム',
          targets: 'tagsExact',
          fields: 'contentId,title,viewCounter,mylistCounter,lengthSeconds,thumbnailUrl',
          _sort: '-viewCounter'
        }
      })

      this.movies = response.data
    }
  },
  watch: {
    $route: {
      async handler () {
        await this.fetchMovies()
      },
      immediate: true
    }
  }
}
</script>
