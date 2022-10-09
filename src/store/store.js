import { createStore } from 'vuex'
import data from '../data/data.json'

export default createStore({
state: { 
    moviesData:data[0].Movie,
    movieSelected:[],
    seatsData:data[0].asientosTotales,
    seatsSelected:[],
    numberSeatSelected:0


}, mutations: {
   setMovieSelected(state, newValue){
    state.movieSelected=newValue
   },
   SetnumberSeatSelected(state, newValue){
    state.numberSeatSelected=newValue
   },
   SetseatsSelected(state, newValue){
    state.seatsSelected=newValue
   }

}, actions: {
    
}, getters: {
 
}})