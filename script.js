const milesToKm = true;
let result = 0;

function convert(){
    const inputValue = document.getElementById('user').value;
    const unit = document.getElementById('unit').value;
    const milesToKm = unit === "milesToKm";
    if(milesToKm){
        result = inputValue * 1.60934;
     }else{
         result = inputValue % 1.60934;
     }
 document.getElementById('resultElement').value = result;
    document.getElementById('resultElement').innerHTML = result;
}

 