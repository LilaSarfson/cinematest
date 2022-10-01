<script>
    export default { 
        props:{
            currentMoviePrice:Number
        },
        data(){
      return{
        totalPrice:0,
        numberSitSelected:0,
        arrayOfPlaces:[{id:0, occupied:false} ,
        {id:1,
        occupied:false}
        ]
      }
    },
    methods:{
     takeSit(id){
    this.arrayOfPlaces[id].occupied= !this.arrayOfPlaces[id].occupied;
      if(this.arrayOfPlaces[id].occupied===false){
        this.numberSitSelected= this.numberSitSelected-1;
        this.totalPrice= this.totalPrice-this.currentMoviePrice
      }
      else{
        this.numberSitSelected= this.numberSitSelected+1;
        this.totalPrice=this.totalPrice + this.currentMoviePrice;
      }
      
     }
  }
}
</script>
    <template>
    <div v-for="place in arrayOfPlaces" :key="place.id" @click="takeSit(place.id)" :class="(place.occupied) ? 'ocupado':'libre'" class="sitio">
    </div>
    <p>You have selected {{numberSitSelected}} seats for a price of {{totalPrice}}</p>
    </template>

    <style scoped>
      .sitio{
        width: 50px;
        height: 50px;
        border: 1px black solid;
      }
      .ocupado{
        background-color: red;
      }
      .libre{
        background-color: blue;
      }
    </style>