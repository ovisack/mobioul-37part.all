const addToLocalStorage= () => {

    const input=document.getElementById("stores-id")
   const id=input.value;

   
    const idInput=document.getElementById("stores-value")
const inputValue=idInput.value;


// 
if(id && inputValue){
    localStorage.setItem(id,inputValue)
}

input.value="";

idInput.value="";


}