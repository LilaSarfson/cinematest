import { createStore } from 'vuex'
import data from '../data/data.json'

export default createStore({
state: { 
    data:data,
    movieSelected:'',
}, mutations: {
   setMovieSelected(state, newValue){
    state.movieSelected=newValue
   }
}, actions: {
    
}, getters: {
 
}})