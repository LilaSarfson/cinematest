<script>
    export default { 
      emits:['change'],
        props:{
            movieData:Object
        },
        data(){
      return{
        selected:''
      }
    },
    methods:{
     handleClick(){
      this.$emit('change', this.selected)
     }
  }
}
</script>
    <template>
    <form class="flex flex-row gap-4">
      <label>Pick a movie:</label>
      <select class="text-black rounded-md" @change="handleClick" v-model="selected">
      <option v-for="data in movieData" :key="data.id" :value="data.TicketPrice">{{`${data.Name} (${data.TicketPrice}$)`}}</option>
      </select>
    </form>
    <ul class="flex flex-row gap-4 bg-showcase rounded-md py-2 pl-1 pr-1">
    <li class="flex flex-row gap-1 items-center"><div class="h-smallseat w-4 bg-seat  rounded-t-xl"></div><span>N/A</span></li>
    <li class="flex flex-row gap-1 items-center"><div class="bg-white-cinema h-smallseat w-4  rounded-t-xl"></div><span>Occupied</span></li>
    <li class="flex flex-row gap-1 items-center"><div class="bg-blueSpace h-smallseat w-4  rounded-t-xl"></div><span>Selected</span></li>
    </ul>

    </template>