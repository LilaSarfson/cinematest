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
    created(){ 
      if(localStorage.getItem('sitios')!=null){
      this.seatsSelected=JSON.parse(localStorage.getItem('sitios'))
      this.seatsSelected.forEach((e) => { 
      let positioArray = e.id;
      this.arrayOfPlaces.splice(positioArray, 1, e)
      });
      if(localStorage.getItem('Price')!=null){
        this.totalPrice=+localStorage.getItem('Price')
      }
      if(localStorage.getItem('numberSeats')!=null){
        this.numberSitSelected=+localStorage.getItem('numberSeats')
      }
    }
    },
    watch:{
      currentMoviePrice:function() {
      this.movieChanged()},
      totalPrice:function(){
        localStorage.setItem('Price', JSON.stringify(this.totalPrice));
      },
      numberSitSelected:function(){
        localStorage.setItem('numberSeats', JSON.stringify(this.numberSitSelected))
      }
   },
    methods:{
      movieChanged(){
        this.totalPrice=this.currentMoviePrice*this.numberSitSelected
      },
     takeSeat(id){
    this.arrayOfPlaces[id].selected= !this.arrayOfPlaces[id].selected;    
    if(this.arrayOfPlaces[id].selected===false && this.arrayOfPlaces[id].occupied===false ){
      this.numberSitSelected= this.numberSitSelected-1;
      this.totalPrice= this.totalPrice-this.currentMoviePrice
      if(this.seatsSelected.includes(this.arrayOfPlaces[id]))
      {this.seatsSelected = this.seatsSelected.filter((seat)=> seat !== this.arrayOfPlaces[id])}
    }
    else if (this.arrayOfPlaces[id].selected===true && this.arrayOfPlaces[id].occupied===false){
      this.numberSitSelected= this.numberSitSelected+1;
      this.totalPrice=this.currentMoviePrice*this.numberSitSelected;
      if(!this.seatsSelected.includes(this.arrayOfPlaces[id]))
      {this.seatsSelected.push(this.arrayOfPlaces[id])}
    }
    this.addItemLstorage();
    console.log(this.seatsSelected)
  },
  addItemLstorage(){
    localStorage.setItem('sitios', JSON.stringify(this.seatsSelected))
  },
}
}
</script>
    <template>
    <div class="grid grid-cols-4 gap-2 items-start">
      <div v-for="place in arrayOfPlaces" :key="place.id" @click="takeSeat(place.id)" :class="(place.occupied) ? 'bg-white-cinema': (place.selected) ? 'bg-blueSpace':'bg-seat'" class="h-smallseat w-4 rounded-t-xl">
      </div>
      
    </div>
    <p class="text-blue-600 text-lg">You have selected <span class="text-blueSpace">{{numberSitSelected}}</span> seats for a price of $<span class="text-blueSpace">{{totalPrice}}</span></p>
    </template>
