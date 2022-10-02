<script>
    export default { 
        props:{
            currentMoviePrice:Number
        },
        data(){
      return{
        totalPrice:0,
        numberSitSelected:0,
        arrayOfPlaces:[
          {id:0, occupied:false} ,{id:1,occupied:false},{id:2,occupied:false},{id:3,occupied:false},{id:4,occupied:false},{id:5,occupied:false},{id:6,occupied:false},{id:7,occupied:false},{id:8,occupied:false},{id:9,occupied:false},{id:10,occupied:false},{id:11,occupied:false}]
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
      if(this.arrayOfPlaces[id].occupied===false){
        this.numberSitSelected= this.numberSitSelected-1;
        this.totalPrice= this.totalPrice-this.currentMoviePrice
      }
      else{
        this.numberSitSelected= this.numberSitSelected+1;
        this.totalPrice=this.currentMoviePrice*this.numberSitSelected
      }
      console.log(this.totalPrice)
     }
  }
}
</script>
    <template>
    <div class="grid grid-cols-2 gap-2 items-start">
      <div v-for="place in arrayOfPlaces" :key="place.id" @click="takeSit(place.id)" :class="(place.occupied) ? 'bg-blueSpace':'bg-seat'" class="h-smallseat w-4 rounded-t-xl">
      </div>
      
    </div>
    <p class="text-blue-600 text-lg">You have selected <span class="text-blueSpace">{{numberSitSelected}}</span> seats for a price of $<span class="text-blueSpace">{{totalPrice}}</span></p>
    </template>

    <!-- <style scoped>
      .sitio{
        width: 50px;
        height: 50px;
        border: 1px black solid;
      }
    </style> -->