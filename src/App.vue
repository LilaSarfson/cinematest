
  <script setup>
    import data from './data/data.json'
    import MovieSelector from './components/MovieSelector.vue'
    import CinemaSeat from './components/CinemaSeat.vue'
  </script>

  <script>
  export default {
    data(){
      return{
        cinemaData:data,
        moviesData:data[0].Movie,
        seatsData:data[0].asientosTotales,
        currentMoviePrice:0
      }
    },
    methods:{
    handleClick(info){
      this.currentMoviePrice= info;
   }
  }
}
  </script>
  <template>
    <div class="flex flex-col items-center gap-4">
      <MovieSelector @change="handleClick" :movieData="moviesData"/>
      <div class="h-lgCinema w-60 bg-white-cinema my-3.5 shadow-lg shadow-3xl"></div>
      <CinemaSeat :seatsData="seatsData" :currentMoviePrice="currentMoviePrice"/>
    </div>
  </template>

