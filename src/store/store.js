import { createStore } from 'vuex'
import data from '../data/data.json'

export default createStore({
state: { 
    moviesData:data[0].Movie,
    movieSelected:'',
    seatsData:data[0].asientosTotales,
    seatsSelected:[],
    numberSeatSelected:0,
    totalPrice:0

}, mutations: {
   setMovieSelected(state, newValue){
    state.movieSelected=newValue
   },
   SetnumberSeatSelected(state, newValue){
    state.numberSeatSelected=newValue
   },
   SetseatsSelected(state, newValue){
    state.seatsSelected=newValue
   },
   SetTotalPrice(state, newValue){
    state.totalPrice=newValue
   }
}, actions: {
    
}, getters: {
 
}})