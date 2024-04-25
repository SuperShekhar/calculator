
const display=document.querySelector(".display");
function potulate(value){
     display.textContent="";
    let result=document.createElement("div");
    result.textContent=value;
    result.style.fontSize="90px";
    display.append(result);
}
function operate(a1,b1,operator){
    let a=parseInt(a1);
    let b=parseInt(b1);
    switch(operator){
        case '+':return a+b;
        case '-':return a-b;
        case '*':return a*b;
        case '/':return a/b;
        case '%':return a%b;
    };

}
let operator,final,initial;

const ac=document.querySelector("#AC");
ac.addEventListener("click",()=>{potulate("");
initial=null;final=null;});

const numbers=document.querySelectorAll(".numbers");
numbers.forEach((number)=>{
    number.addEventListener("click",()=>{potulate(number.textContent)})
})


const equal=document.querySelector("#equal");
equal.addEventListener("click",()=>{
let result=operate(initial,final,operator);
potulate(result);
});