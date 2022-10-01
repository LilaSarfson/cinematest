<script>
    export default { 
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
    <label>Pick a movie</label>
    <select @change="handleClick" v-model="selected">
    <option v-for="data in movieData" :key="data.id" :value="data.TicketPrice">{{`${data.Name} (${data.TicketPrice}$)`}}</option>
    </select>
    <p>Movie selected: {{selected}}</p>

    </template>