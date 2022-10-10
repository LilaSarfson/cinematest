
// import {watch} from 'vue'
export default function useStorage(){
    function localNumbers(key, value){
        if(localStorage.getItem(key)!=null){
            value.value=+localStorage.getItem(key)}
    }
    function localObject(key, variable){
        if(localStorage.getItem(key)!=null){
            variable.value=JSON.parse(localStorage.getItem(key));
    }}
    function localObject2(key, variable, array){
        if(localStorage.getItem(key)!=null){
            variable.value=JSON.parse(localStorage.getItem(key));
            variable.value.forEach((seat) => { 
            let positionArray = seat.id;
            array.value.splice(positionArray, 1, seat)})}
    }
    // function watchIt(variable, key, wariable){
    // watch(()=>wariable.value, function(){ 
    // localStorage.setItem(key, variable.value)})
    // }
    return{localNumbers, localObject, localObject2}
    
}

