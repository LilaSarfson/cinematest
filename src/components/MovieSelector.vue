<script>
    export default { 
      emits:['change'],
        props:{
            movieData:Object
        },
        data(){
      return{
        movieDataprop:this.movieData,
        movieSelected:''
      }
    },
    created(){
      if(localStorage.getItem('movieSelected')!=null){
        this.movieSelected=JSON.parse(localStorage.getItem('movieSelected'));
        this.handleClick()
      }
    },
    methods:{
     handleClick(){
      let priceSelected = this.movieSelected.TicketPrice
      this.$emit('change', priceSelected)
     }
  },
  watch:{
    movieSelected:function(){
      localStorage.setItem('movieSelected', JSON.stringify(this.movieSelected));
    }
  },
}
</script>
    <template>
    <div class="flex flex-col gap-5">
      <form class="flex flex-row gap-4">
        <label>Pick a movie:</label>
        <select :value="movieSelected" class="text-black rounded-md" @change="handleClick" v-model="movieSelected">
        <option v-for="data in movieDataprop" :value="data" :key="data.id">{{`${data.Name} (${data.TicketPrice}$)`}}</option>
        </select>
      </form>
      <ul class="flex flex-row gap-4 bg-showcase rounded-md py-2 pl-3 pr-3">
      <li class="flex flex-row gap-1 items-center"><div class="h-smallseat w-4 bg-seat rounded-t-xl"></div><span>N/A</span></li>
      <li class="flex flex-row gap-1 items-center"><div class="bg-white-cinema h-smallseat w-4  rounded-t-xl"></div><span>Occupied</span></li>
      <li class="flex flex-row gap-1 items-center"><div class="bg-blueSpace h-smallseat w-4  rounded-t-xl"></div><span>Selected</span></li>
      </ul>
    </div>

    </template>