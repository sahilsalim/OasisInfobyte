let num1=8
let num2=2
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl=document.getElementById("result-el");
let result=0;

function add(){
    result=num1+num2;
    sumEl.textContent=result;
}
function subtract(){
    result=num1-num2;
    sumEl.textContent=result;
}
function multiply(){
    result=num1*num2;
    sumEl.textContent=result;

}
function divide(){
    result=num1/num2;
    sumEl.textContent=result;

}