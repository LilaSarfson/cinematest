
import {watch} from 'vue'
export default function useStorage(){
    function watchIt(key,variable, wariable){
    watch(()=>wariable.value, function(){ 
    localStorage.setItem(key, JSON.stringify(variable.value))})
   }
    function localStorageNum(key, value, wariable){
        if(localStorage.getItem(key)!=null){
            value.value=+localStorage.getItem(key)}
        watchIt(key, value, wariable)    
    }
    function localStorageObj(key, variable,array, wariable){
        if(localStorage.getItem(key)!=null){
            variable.value=JSON.parse(localStorage.getItem(key));
            if(key === 'seatsLstorage'){
            variable.value.forEach((seat) => { 
            let positionArray = seat.id;
            array.value.splice(positionArray, 1, seat)})}
        }
        watchIt(key, variable, wariable)
    }
    return{localStorageNum, localStorageObj}
    
}
