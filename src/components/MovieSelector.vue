<script>
    export default { 
      emits:['change'],
        props:{
            movieData:Object
        },
        data(){
      return{
        movieDataprop:this.movieData,
        selected:''
      }
    },
    created(){
      if(localStorage.getItem('movieSelected')!=null){
        this.selected=JSON.parse(localStorage.getItem('movieSelected'));
        this.handleClick()
      }
    },
    methods:{
     handleClick(){
      let priceSelected = this.selected.TicketPrice
      this.$emit('change', priceSelected)
     }
  },
  watch:{
    selected:function(){
      localStorage.setItem('movieSelected', JSON.stringify(this.selected));
    }
  },
}
</script>
    <template>
    <form class="flex flex-row gap-4">
      <label>Pick a movie:</label>
      <select :value="selected" class="text-black rounded-md" @change="handleClick" v-model="selected">
      <option v-for="data in movieDataprop" :value="data" :key="data.id">{{`${data.Name} (${data.TicketPrice}$)`}}</option>
      </select>
    </form>
    <ul class="flex flex-row gap-4 bg-showcase rounded-md py-2 pl-1 pr-1">
    <li class="flex flex-row gap-1 items-center"><div class="h-smallseat w-4 bg-seat  rounded-t-xl"></div><span>N/A</span></li>
    <li class="flex flex-row gap-1 items-center"><div class="bg-white-cinema h-smallseat w-4  rounded-t-xl"></div><span>Occupied</span></li>
    <li class="flex flex-row gap-1 items-center"><div class="bg-blueSpace h-smallseat w-4  rounded-t-xl"></div><span>Selected</span></li>
    </ul>

    </template>