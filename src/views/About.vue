<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="test">
      <h3>movies:</h3>
      <p>{{ movies }}</p>
      <h3>error:</h3>
      <p>{{ errorLog }}</p>
      <div class="btn">
        <button @click="getMovies">GETMOVIES</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      movies: [],
      errorLog: []
    }
  },
  methods: {
    getMovies () {
      this.axios.get('https://google.com')
        .then(response => {
          this.movies = response.body
        })
        .catch(error => {
          this.errorLog = error
        })
    }
  }
}
</script>
