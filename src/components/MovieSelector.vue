<script>
import SelectaMovie from '../composables/SelectaMovie'
import getData from '../composables/getData'
// import useStorage from '../composables/useStorage'
    export default {
      setup(){
        const {movieSelected, setMovie} = SelectaMovie();
        const{moviesData}= getData();
        // // LOCALSTORAGE
        // let movie = useStorage('MovieSelected')
        if(localStorage.getItem('MovieSelected')!=null){
        movieSelected.value=JSON.parse(localStorage.getItem('MovieSelected'));}
        function info (){
          // console.log(movie.value)
        }
        return{
          moviesData,
          movieSelected,
          info,
          setMovie
        }
      }
    }
</script>
<template>
      <button @click="info">Info</button>
    <div class="flex flex-col gap-7">
      <form class="flex flex-row gap-4">
        <label>Pick a movie:</label>
        <select @change="setMovie" class="text-black rounded-md" v-model="movieSelected">
        <option v-for="data in moviesData" :value="data" :key="data.id">{{`${data.Name} (${data.TicketPrice}$)`}}</option>
        </select>
      </form>
      <ul class="flex flex-row justify-center gap-4 bg-showcase rounded-md py-2 pl-3 pr-3">
      <li class="flex flex-row gap-1 items-center"><div class="h-smallseat w-4 bg-seat rounded-t-xl"></div><span>N/A</span></li>
      <li class="flex flex-row gap-1 items-center"><div class="bg-white-cinema h-smallseat w-4  rounded-t-xl"></div><span>Occupied</span></li>
      <li class="flex flex-row gap-1 items-center"><div class="bg-blueSpace h-smallseat w-4  rounded-t-xl"></div><span>Selected</span></li>
      </ul>
    </div>
    </template>