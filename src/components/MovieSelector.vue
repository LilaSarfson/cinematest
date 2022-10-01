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
    <option v-for="data in movieData" :key="data.No" value="">{{data.Name}}</option>
    </select>

    </template>