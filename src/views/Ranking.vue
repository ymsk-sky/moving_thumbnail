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
      movies: [],
      errorLog: []
    }
  },
  methods: {
    async fetchMovies () {
      await this.axios.get('http://localhost/api/ranking', {
        params: {
          q: 'ゲーム',
          targets: 'tagsExact',
          fields: 'contentId,title,viewCounter,mylistCounter,lengthSeconds,thumbnailUrl',
          _sort: '-viewCounter',
          _context: 'testapp'
        }
      })
        .then(response => {
          this.movies = response.data.data
        })
        .catch(error => {
          this.errorLog = error
          console.log(error)
        })
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
