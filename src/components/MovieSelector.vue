<script>
import selectaMovie from '../composables/selectaMovie'
import getData from '../composables/getData'
    export default {
      setup(){
        const{moviesData}= getData();
        const {movieSelected} = selectaMovie();
        return{
          moviesData,
          movieSelected,
        }
      }
    }
</script>
<template>
    <div class="flex flex-col gap-7">
      <form class="flex flex-row gap-4">
        <label>Pick a movie:</label>
        <select class="text-black rounded-md" v-model="movieSelected">
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