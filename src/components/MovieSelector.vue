<script>
    export default { 
        props:{
            movieData:Object
        },
        data(){
      return{
      }
    },
    methods:{
     
  }
}
</script>
    <template>
    <label>Pick a movie</label>
    <select name="movies" id="movie"> -->
    <option v-for="data in movieData" :key="data.id" value="">{{`${data.Name} (${data.TicketPrice})`}}</option>
    </select>

    </template>