let num = document.querySelector('.num');
const btn= document.querySelector('button');
let counter= '';

btn.addEventListener('click',function(){
    counter = Number(counter);
    counter++;
    num.textContent = counter;
    console.log("clicked");
})