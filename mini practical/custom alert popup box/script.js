let clcBtn = document.querySelector('.clickBtn');
let box =document.querySelector('.box');
const delBtn = document.querySelector('.delBtn');
const cancelBtn = document.querySelector('.cancelBtn');

clcBtn.addEventListener('click', function(){
    clcBtn.style.display = 'none';
    box.style.display = "flex";
});
delBtn.addEventListener('click' , function(){
    alert("Your account deleted successfuly");
    clcBtn.textContent = "Account Deleted!";
    clcBtn.style.display = 'block';
    box.style.display = "none";
});
cancelBtn.addEventListener("click", function(){
    clcBtn.textContent = "Click";
    clcBtn.style.display = 'block';
    box.style.display = "none";
})