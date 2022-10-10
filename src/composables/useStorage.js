
export default function useStorage(key, value){
    function localNumbers(){
        if(localStorage.getItem(key)!=null){
            value.value=+localStorage.getItem(key)}
    }
    function localObject(){
        if(localStorage.getItem(key)!=null){
            value.value=JSON.parse(localStorage.getItem(key));}
    }
    return{localNumbers, localObject}
}

// Funciona pero necesito que sea genérico para hacerlo con todas
// let storeVal =(localStorage.getItem(key))
// let val = ref(storeVal)

// watch(val, ()=> write())

// function write (){
//     localStorage.setItem(key, JSON.stringify(val.value))
// }