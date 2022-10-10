import {watch} from 'vue'
export default function useStorage(key, value, itwatch){
    watch(()=>itwatch.value, function(){localStorage.setItem(key, value.value)})

    if(localStorage.getItem('key')!=null){
        value.value=+localStorage.getItem('key')}
}


// let storeVal =(localStorage.getItem(key))
// let val = ref(storeVal)

// watch(val, ()=> write())

// function write (){
//     localStorage.setItem(key, JSON.stringify(val.value))
// }