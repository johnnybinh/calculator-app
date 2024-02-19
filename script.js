const numbtn = document.getElementsByClassName("numbtn");
const ans = document.getElementById("answer")
const operator = document.getElementsByClassName("calcu");
var keyContent;
var dataContent;
console.log(operator) 

//arr = []

function LogClicked(num){
  console.log(`clicked ${num}`)
  answer.innerHTML = num
}

let addNumb = (a,b) => a+b

for(let i = 0; i < 4; i++){
  operator[i].addEventListener(`click`, ()=>{
    if(operator[i].dataset.action == "plus"){
      console.log("plus")
    }
    else if(operator[i].dataset.action == "minus"){
      console.log("minus")
    }
    else if(operator[i].dataset.action == "multiply"){
      console.log("multiply")
    }
    else if(operator[i].dataset.action == "divide"){
      console.log("divided")
    }
  })
}



for(let i  = 0; i < 9; i++  ){
  numbtn[i].addEventListener("click",()=>{
    LogClicked(i+1)
    //arr.push(i+1);
    console.log(arr)
  })
}