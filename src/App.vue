
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
    <div>
      <MovieSelector @change="handleClick" :movieData="movieData"/>
      <div class="h-lgCinema w-full bg-white-cinema"></div>
      <button @click="saberCosas">Saber</button>
      <CinemaSit :currentMoviePrice="currentMoviePrice"/>
    </div>
  </template>

