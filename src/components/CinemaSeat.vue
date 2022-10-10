<script>
import {ref, computed, watch} from 'vue'
import {useStore} from 'vuex'
    export default { 
      setup(){
      const store = useStore(); 
      let numberSeatSelected = ref(0);
      let seatsSelected = ref([]);
      let totalPrice = ref(0);
      const arrayOfSeats = computed(()=> store.state.data[0].asientosTotales)
      const currentMoviePrice = computed(()=> store.state.movieSelected.TicketPrice)
      // LOCALSTORAGE
      if(localStorage.getItem('seatsLstorage')!=null){
      seatsSelected.value=JSON.parse(localStorage.getItem('seatsLstorage'));
      seatsSelected.value.forEach((seat) => { 
      let positionArray = seat.id;
       arrayOfSeats.value.splice(positionArray, 1, seat)
        })}
       
      if(localStorage.getItem('Price')!=null){
        totalPrice.value=+localStorage.getItem('Price')}
      watch(()=>totalPrice.value, function(){localStorage.setItem('Price', totalPrice.value);})

      if(localStorage.getItem('numberSeats')!=null){
        numberSeatSelected.value=+localStorage.getItem('numberSeats')}
      watch(()=>numberSeatSelected.value, function(){ localStorage.setItem('numberSeats', numberSeatSelected.value),
      localStorage.setItem('seatsLstorage', JSON.stringify(seatsSelected.value))
    })
      watch(()=>currentMoviePrice.value, function(){movieChanged()})
      // METHODS
      function informacion(){
        console.log(seatsSelected.value)
      }
      function movieChanged(){
        totalPrice.value=currentMoviePrice.value*numberSeatSelected.value
      }
      function takeSeat(id){
      let allSeats = arrayOfSeats.value[id];
      allSeats.selected= !allSeats.selected;    
      if(allSeats.selected===false && allSeats.occupied===false ){
      numberSeatSelected.value--;
        totalPrice.value= totalPrice.value-currentMoviePrice.value
        if(seatsSelected.value.includes(allSeats))
        {seatsSelected.value = seatsSelected.value.filter((seat)=> seat !== allSeats)}
      }
      else if (allSeats.selected===true && allSeats.occupied===false){
        numberSeatSelected.value++;
        totalPrice.value=currentMoviePrice.value*numberSeatSelected.value;
        if(!seatsSelected.value.includes(allSeats))
        {seatsSelected.value.push(allSeats)}
      }
  }
      return{
        numberSeatSelected,
        seatsSelected,
        totalPrice,
        arrayOfSeats,
        currentMoviePrice,
        informacion,
        movieChanged,
        takeSeat
      }
    }
}
</script>
    <template>
    <div class="grid grid-cols-10  gap-2">
      <div v-for="place in arrayOfSeats" :key="place.id" @click="takeSeat(place.id)" :class="(place.occupied) ? 'bg-white-cinema': (place.selected) ? 'bg-blueSpace':'bg-seat'" class="h-smallseat w-4 rounded-t-xl scale-100 transform transition duration-400 hover:scale-125 grid-flow-row">
      </div>
    </div>
    <p class=" text-lg">You have selected <span class="text-blueSpace">{{numberSeatSelected}}</span> seats for a price of $<span class="text-blueSpace">{{currentMoviePrice && numberSeatSelected ? totalPrice : 0}}</span></p>
    <button @click="informacion">Información</button>
    </template>
