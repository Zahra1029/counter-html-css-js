const currentnum = document.getElementById('num');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
let newnum;
decrease.addEventListener('click' , function(){
    newnum = Number(currentnum.innerHTML)-1;
    currentnum.innerHTML = newnum;

})
reset.addEventListener('click' , function(){
    currentnum.innerHTML = 0;
})
increase.addEventListener('click' , function(){
    newnum = Number(currentnum.innerHTML)+1;
    currentnum.innerHTML = newnum;
})
decrease.addEventListener('click', function(){
    if( currentnum.innerHTML < 0)
    currentnum.style.color = 'red';
    if( currentnum.innerHTML == 0) 
    currentnum.style.color = 'white';
})
reset.addEventListener('click' , function(){
    if( currentnum.innerHTML == 0) 
    currentnum.style.color = 'white';
})
increase.addEventListener('click' , function(){
    if( currentnum.innerHTML > 0)
    currentnum.style.color = "green";
    if( currentnum.innerHTML == 0) 
    currentnum.style.color = 'white';
})
