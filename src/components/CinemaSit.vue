<script>
    export default { 
        props:{
            currentMoviePrice:Number,
            seatsData:Object
        },
        data(){
      return{
        seatsSelected:[],
        totalPrice:0,
        numberSitSelected:0,
        arrayOfPlaces:this.seatsData
      }
    },
    mounted(){
      if(localStorage.seatsSelected)
      this.seatsSelected=localStorage.seatsSelected
    },
    watch:{
      currentMoviePrice:function() {
      this.movieChanged()},

      seatsSelected:function(){
        localStorage.seatsSelected=this.seatsSelected
      }
   },
    methods:{
      movieChanged(){
        this.totalPrice=this.currentMoviePrice*this.numberSitSelected
      },
     takeSit(id){
    this.arrayOfPlaces[id].selected= !this.arrayOfPlaces[id].selected;
    if(!this.seatsSelected.includes(this.arrayOfPlaces[id])) 
    // Poner condiciones para el push y filter
    {this.seatsSelected.push(this.arrayOfPlaces[id])
      if (this.arrayOfPlaces[id].selected === false){
      this.seatsSelected.filter((seat)=> seat.selected===true)
    }
    }
    console.log(this.seatsSelected)
      if(this.arrayOfPlaces[id].selected===false && this.arrayOfPlaces[id].occupied===false ){
        this.numberSitSelected= this.numberSitSelected-1;
        this.totalPrice= this.totalPrice-this.currentMoviePrice
      }
      else if (this.arrayOfPlaces[id].selected===true && this.arrayOfPlaces[id].occupied===false){
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
      <div v-for="place in arrayOfPlaces" :key="place.id" @click="takeSit(place.id)" :class="(place.occupied) ? 'bg-white-cinema': (place.selected) ? 'bg-blueSpace':'bg-seat'" class="h-smallseat w-4 rounded-t-xl">
      </div>
      
    </div>
    <p class="text-blue-600 text-lg">You have selected <span class="text-blueSpace">{{numberSitSelected}}</span> seats for a price of $<span class="text-blueSpace">{{totalPrice}}</span></p>
    </template>
