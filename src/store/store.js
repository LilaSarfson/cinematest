import { createStore } from 'vuex'
import data from '../data/data.json'

export default createStore({
state: { 
    moviesData:data[0].Movie,
    movieSelected:[],
    seatsData:data[0].asientosTotales,
    currentMoviePrice:0,
    seatsSelected:[],

}, mutations: {
   setMovieSelected(state, newValue){
    state.movieSelected=newValue
   }

}, actions: {
    
}, getters: {
 
}})