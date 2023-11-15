let equal_prassed = 0;
let input = document.getElementById("input");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal")
window.onload = () =>{
  input.value = ""
}
console.log(input)


// here we start for each loop for targeting every button
let dta = document.querySelectorAll(".keyval");
dta.forEach((buttun_class)=>{
  buttun_class.addEventListener("click",()=>{
   if(equal_prassed == 1){
    input.value = ""
    equal_prassed = 0
   }
   
   input.value += buttun_class.value
  })
})

document.addEventListener("keyup",(e)=>{
  if(key.value === 'Enter'){
    let data = e.value;
    console.log(data)
  }
});

equal.addEventListener("click",()=>{
  equal_prassed = 1;
  let input_val = input.value;
 
  
  try {
    let solution = eval(input_val);
    
    if(Number.isInteger(solution)){
      input.value = solution
    }else{
      input.value = solution.toFixed(2);
     }

  } catch (error) {
    
  }
  console.log(equal_prassed)
})

del.addEventListener("click",()=>{
  let delval = input.value.slice(0,-1);
  console.log(delval)
  input.value = delval;
  
})

console.log(dta)
