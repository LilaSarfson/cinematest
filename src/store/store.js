import { createStore } from 'vuex'
import data from '../data/data.json'

export default createStore({
state: { 
    data:data,
    movieSelected:'',
    seatsSelected:[],
    totalPrice:0

}, mutations: {
   setMovieSelected(state, newValue){
    state.movieSelected=newValue
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