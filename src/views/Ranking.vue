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
    <div class="test">
      <h3>movies</h3>
      {{ movies }}
    </div>
    <div class="error">
      <h3>error log</h3>
      {{ errorLog }}
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
      await this.axios.get('/api', {
        params: {
          q: 'ゲーム',
          targets: 'tagsExact',
          fields: 'contentId,title,viewCounter,mylistCounter,lengthSeconds,thumbnailUrl',
          _sort: '-viewCounter',
          _context: 'testapp'
        }
      })
        .then(response => {
          this.movies = response.data
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
