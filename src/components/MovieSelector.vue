<script>
import {computed, watch} from 'vue'
import {useStore} from 'vuex'
    export default {
      setup(){
        const store = useStore(); 
        // VARIABLES 
        const moviesData = computed(()=> store.state.data[0].Movie,)
        const movieSelected = computed({
          get(){ return store.state.movieSelected},
          set(newValue){store.commit('setMovieSelected', newValue)}
        })
        // LOCALSTORAGE
        if(localStorage.getItem('MovieSelected')!=null){
        movieSelected.value=JSON.parse(localStorage.getItem('MovieSelected'));}
        watch(()=>movieSelected.value, function(){ localStorage.setItem('MovieSelected', JSON.stringify(movieSelected.value))})
        return{
          moviesData,
          movieSelected
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