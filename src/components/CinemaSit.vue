<script>
    export default { 
        props:{
            currentMoviePrice:Number,
            seatsData:Object
        },
        data(){
      return{
        occupiedSeats:this.data[0].asientosTotales,
        totalPrice:0,
        numberSitSelected:0,
        arrayOfPlaces:this.seatsData
      }
    },
    watch:{
      currentMoviePrice:function() {
      this.movieChanged();
   }
    },
    methods:{
      movieChanged(){
        this.totalPrice=this.currentMoviePrice*this.numberSitSelected
      },
     takeSit(id){
    this.arrayOfPlaces[id].occupied= !this.arrayOfPlaces[id].occupied;
      if(this.arrayOfPlaces[id].occupied===false && this.arrayOfPlaces[id].selected===false ){
        this.numberSitSelected= this.numberSitSelected-1;
        this.totalPrice= this.totalPrice-this.currentMoviePrice
      }
      else if (this.arrayOfPlaces[id].occupied===true && this.arrayOfPlaces[id].selected===false){
        this.numberSitSelected= this.numberSitSelected+1;
        this.totalPrice=this.currentMoviePrice*this.numberSitSelected
      }
      console.log(this.totalPrice)
     }
  }
}
</script>
    <template>
    <div class="grid grid-cols-4 gap-2 items-start">
      <div v-for="place in arrayOfPlaces" :key="place.id" @click="takeSit(place.id)" :class="(place.selected) ? 'bg-white-cinema': (place.occupied) ? 'bg-blueSpace':'bg-seat'" class="h-smallseat w-4 rounded-t-xl">
      </div>
      
    </div>
    <p class="text-blue-600 text-lg">You have selected <span class="text-blueSpace">{{numberSitSelected}}</span> seats for a price of $<span class="text-blueSpace">{{totalPrice}}</span></p>
    </template>
