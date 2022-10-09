<script>

    export default { 
    computed:{
      arrayOfSeats(){
        return this.$store.state.seatsData
      },
      currentMoviePrice(){
          return this.$store.state.movieSelected.TicketPrice
        },
      numberSeatSelected:{
        get(){
        return this.$store.state.numberSeatSelected},
        set(newValue){
          this.$store.commit('SetnumberSeatSelected', newValue)
        }
      },
      seatsSelected:{
        get(){
        return this.$store.state.seatsSelected},
        set(newValue){
          this.$store.commit('SetseatsSelected', newValue)
        }
      },
      totalPrice:{
        get(){return this.$store.state.totalPrice},
        set(newValue){this.$store.commit('SetTotalPrice', newValue)}
      }
    },
    created(){ 
      if(localStorage.getItem('seatsLstorage')!=null){
      this.seatsSelected=JSON.parse(localStorage.getItem('seatsLstorage'))
      this.seatsSelected.forEach((seat) => { 
      let positionArray = seat.id;
      this.arrayOfSeats.splice(positionArray, 1, seat)
      });
      if(localStorage.getItem('Price')!=null){
        this.totalPrice=+localStorage.getItem('Price')
      }
      if(localStorage.getItem('numberSeats')!=null){
        this.numberSeatSelected=+localStorage.getItem('numberSeats')
      }
    }
    },
    watch:{
      currentMoviePrice:function() {
      this.movieChanged()},
      totalPrice:function(){
        localStorage.setItem('Price', JSON.stringify(this.totalPrice));
      },
      numberSeatSelected:function(){
        localStorage.setItem('numberSeats', JSON.stringify(this.numberSeatSelected))
      }
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
