
const display = document.querySelector(".display");
display.textContent = '';
let final = 0, initial = 0, opera = "",result=0;
const dot=document.querySelector("#dot");
const negative=document.querySelector("#negative")
function potulate(value) { //Function to display the result or number
    display.textContent = value;
}
function operate(a1, b1, operator) { //function to do mathematical operation
    let a = parseFloat(a1);
    let b = parseFloat(b1);
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case '%': return a % b;
    };
}


const ac = document.querySelector("#AC"); 
ac.addEventListener("click", () => {  //action when AC button is pressed
    potulate("");
    initial = 0; final = 0; opera = "";
});

const numbers = document.querySelectorAll(".numbers");
numbers.forEach((number) => {    //looping through each number and adding event listener and displaying when pressed
    number.addEventListener("click", () => {
    
        if (opera != "" && opera != "+/-") {
            if (final == 0) { display.textContent = ""; }
            final = display.textContent + number.textContent;
            console.log(final)
            potulate(final);
        }
        
        if (final == 0) {
            if(initial==0)
            display.textContent="";
            initial = display.textContent + number.textContent;
            console.log(initial)
            potulate(initial);
        }
    })
})
dot.addEventListener("click", () => {
    
    if (opera != "" && opera != "+/-") {
        if (final ==0) { display.textContent = ""; }
        if(typeof final === 'string' && !final.includes("."))
       { final +=".";
     display.textContent=final;}
      
        console.log(final);
        potulate(final);
    }

    if (final == 0) {
        if(initial==0)
        display.textContent="";
        if(typeof initial === 'string' && !initial.includes("."))
        { initial+="."
       display.textContent=initial}
       
        console.log(initial)
        potulate(initial);
    }
})
negative.addEventListener("click", () => {
    
    if (opera != "" && opera != "+/-") {
        if (final ==0) { display.textContent = ""; }
        if(typeof final === 'string' && !final.includes("-"))
       { final ="-"+final;
     display.textContent=final;}
      
        console.log(final);
        potulate(final);
    }

    if (final == 0) {
        if(initial==0)
        display.textContent="";
        if(typeof initial === 'string' && !initial.includes("-"))
        { initial="-"+ initial;
       display.textContent=initial}
       
        console.log(initial);
        potulate(initial);
    }
})
const operators = document.querySelectorAll(".operator"); 
operators.forEach((operator) => {             //looping through every operator and adding event listener and choosing the operator when pressed
    operator.addEventListener("click", () => {
        if(final!==0){
            result = operate(initial, final, opera);
            initial = result;
            final = 0;
            potulate(result);
        }
        opera = operator.textContent;
        console.log(opera)
    })
});


const equal = document.querySelector("#equal"); 
equal.addEventListener("click", ()=>{  // action when equals button is clicked
    
    if(final!==0){
    result = operate(initial, final, opera);
    
    final=0;
    initial = result;
    if (typeof result === 'number') {
        if (Number.isInteger(result)) {
            result = result.toFixed(0);
        } else {
            result = result.toFixed(2);
        }
    }
    potulate(result);
    if(result===Infinity||isNaN(result)){
        result=0;
        initial=0;
        opera="";
    }
}});



