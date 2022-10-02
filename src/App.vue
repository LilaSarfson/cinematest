
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
    <div class="flex flex-col items-center gap-2">
      <MovieSelector @change="handleClick" :movieData="movieData"/>
      <div class="h-lgCinema w-full bg-white-cinema my-3.5 rotate-x-45 shadow-lg shadow-white-cinema-500/50"></div>
      <CinemaSit :currentMoviePrice="currentMoviePrice"/>
    </div>
  </template>

