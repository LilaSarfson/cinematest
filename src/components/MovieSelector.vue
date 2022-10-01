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
     
  }
}
</script>
    <template>
    <label>Pick a movie</label>
    <select v-model="selected">
    <option  v-for="data in movieData" :key="data.id">{{`${data.Name} (${data.TicketPrice})`}}</option>
    </select>
    <p>Movie selected: {{selected}}</p>

    </template>