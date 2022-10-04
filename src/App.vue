
  <script setup>
    import data from './data/data.json'
    import MovieSelector from './components/MovieSelector.vue'
    import CinemaSeat from './components/CinemaSit.vue'

  </script>

  <script>
  export default {
    data(){
      return{
        cinemaData:data,
        movieData:data[0].Movie,
        seatsData:data[0].asientosTotales,
        currentMoviePrice:0
      }
    },
    methods:{
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
      <CinemaSeat :seatsData="seatsData" :currentMoviePrice="currentMoviePrice"/>
    </div>
  </template>

