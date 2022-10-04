<script>
    export default { 
        props:{
            currentMoviePrice:Number,
            data:Object
        },
        data(){
      return{
        occupiedSeats:this.data[0].asientosTotales,
        totalPrice:0,
        numberSitSelected:0,
        // Hacer en un json a parte
        arrayOfPlaces:[
          {id:0, occupied:false, selected:true} ,{id:1,occupied:false, selected:false},{id:2,occupied:false, selected:false},{id:3,occupied:false, selected:false},{id:4,occupied:false, selected:false},{id:5,occupied:false, selected:false},{id:6,occupied:false, selected:false},{id:7,occupied:false, selected:false},{id:8,occupied:false, selected:false},{id:9,occupied:false, selected:false},{id:10,occupied:false, selected:false},{id:11,occupied:false, selected:false},{id:12, occupied:false, selected:false} ,{id:13,occupied:false, selected:false},{id:14,occupied:false, selected:false},{id:15,occupied:false, selected:false},{id:16,occupied:false, selected:false},{id:17,occupied:false, selected:false},{id:18,occupied:false, selected:false},{id:19,occupied:false, selected:false},{id:20,occupied:false, selected:false},{id:21,occupied:false, selected:false},{id:22,occupied:false, selected:false},{id:23,occupied:false, selected:false}
        ]
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
