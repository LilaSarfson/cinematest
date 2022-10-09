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
      seatsSelected.value=JSON.parse(localStorage.getItem('seatsLstorage'))
      seatsSelected.value.forEach((seat) => { 
      let positionArray = seat.id;
      arrayOfSeats.value.splice(positionArray, 1, seat)
      })}

      if(localStorage.getItem('Price')!=null){
        totalPrice.value=+localStorage.getItem('Price')}
      watch(()=>totalPrice.value, function(){localStorage.setItem('Price', totalPrice.value);})

      if(localStorage.getItem('numberSeats')!=null){
        numberSeatSelected.value=+localStorage.getItem('numberSeats')}
      watch(()=>numberSeatSelected.value, function(){ localStorage.setItem('numberSeats', numberSeatSelected.value)})
      
      return{
        numberSeatSelected,
        seatsSelected,
        totalPrice,
        arrayOfSeats,
        currentMoviePrice
      }
    },
    watch:{
      currentMoviePrice:function() {
      this.movieChanged()},
   },
    methods:{
      informacion(){
        console.log(this.totalPrice)
      },
      movieChanged(){
        this.totalPrice=this.currentMoviePrice*this.numberSeatSelected
      },
     takeSeat(id){
      let allSeats = this.arrayOfSeats[id];
    allSeats.selected= !allSeats.selected;    
    if(allSeats.selected===false && allSeats.occupied===false ){
     this.numberSeatSelected= this.numberSeatSelected-1;
      this.totalPrice= this.totalPrice-this.currentMoviePrice
      if(this.seatsSelected.includes(allSeats))
      {this.seatsSelected = this.seatsSelected.filter((seat)=> seat !== allSeats)}
    }
    else if (allSeats.selected===true && allSeats.occupied===false){
      this.numberSeatSelected= this.numberSeatSelected+1;
      this.totalPrice=this.currentMoviePrice*this.numberSeatSelected;
      if(!this.seatsSelected.includes(allSeats))
      {this.seatsSelected.push(allSeats)}
    }
    localStorage.setItem('seatsLstorage', JSON.stringify(this.seatsSelected))
  },
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
