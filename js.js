const result = document.querySelector("h2"); //h2
const lower = document.querySelector('#lower'); //input
const upper = document.querySelector('#upper');  //input
const generateBtn = document.querySelector("#btnGenerate"); //button
const clearBtn = document.querySelector("#btnClear"); //button

generateBtn.addEventListener("click", function(min, max){
    min = Number(lower.value);
    max = Number(upper.value); 
    if( min < max ){
        let randomNum = Math.floor(Math.random() * (max - min +1 ) + min)
       
       console.log(randomNum)
        result.innerHTML = randomNum
    }else{
        result.innerHTML = "Error sorry:(((";
    }
})
 clearBtn.addEventListener('click', function () {
    
    lower.value = "";
    upper.value = '';
    result.innerHTML = "";
 })