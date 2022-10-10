<script>
import {watch} from 'vue'
import getData from '../composables/getData'
import getTotalPrice from '../composables/getTotalPrice'
import checkingSeats from '../composables/checkingSeats'
// import useStorage from '../composables/useStorage'
    export default { 
      setup(){
        const {arrayOfSeats, currentMoviePrice}= getData();
        const{totalPrice,numberSeatSelected}=getTotalPrice(currentMoviePrice);
        const {seatsSelected,takeSeat}= checkingSeats(arrayOfSeats,totalPrice,currentMoviePrice,numberSeatSelected)
      // LOCALSTORAGE
      if(localStorage.getItem('seatsLstorage')!=null){
      seatsSelected.value=JSON.parse(localStorage.getItem('seatsLstorage'));
      seatsSelected.value.forEach((seat) => { 
      let positionArray = seat.id;
       arrayOfSeats.value.splice(positionArray, 1, seat)
        })}
       
      if(localStorage.getItem('Price')!=null){
        totalPrice.value=+localStorage.getItem('Price')}

      if(localStorage.getItem('numberSeats')!=null){
      numberSeatSelected.value=+localStorage.getItem('numberSeats')}
      watch(()=>numberSeatSelected.value, function(){ localStorage.setItem('numberSeats', numberSeatSelected.value),
      localStorage.setItem('seatsLstorage', JSON.stringify(seatsSelected.value))
    })
      return{
        numberSeatSelected,
        totalPrice,
        arrayOfSeats,
        currentMoviePrice,
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
    </template>
