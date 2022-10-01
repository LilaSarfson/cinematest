  <script setup>
    import data from './data/data.json'
    import MovieSelector from './components/MovieSelector.vue'
    import CinemaSit from './components/CinemaSit.vue'

  </script>

  <script>
  export default {
    data(){
      return{
        cinemaData:data,
        movieData:data[0].Movie,
        currentMoviePrice:0
      }
    },
    methods:{
      saberCosas(){
        console.log(this.movieData)
      },
    handleClick(info){
      this.currentMoviePrice= info;
       console.log(this.currentMoviePrice)
   }
  }
}
  </script>
<template>
  <MovieSelector @change="handleClick" :movieData="movieData"/>
<button @click="saberCosas">Saber</button>
<CinemaSit :currentMoviePrice="currentMoviePrice"/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
