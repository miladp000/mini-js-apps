let btns = document.querySelectorAll(".key");


btns.forEach(btn =>{
   btn.addEventListener("transitionend" , ()=>{
      btn.classList.remove("active");
   });
   btn.addEventListener("click" , ()=>{
      handleAudio(btn.dataset.key)
   })
})


window.addEventListener("keydown" , (e)=>{
   handleAudio(e.keyCode);
});



function handleAudio(code){
   let audio = document.querySelector(`audio[data-key="${code}"]`);
   let btn = document.querySelector(`div[data-key="${code}"]`);
   btn.classList.add("active");
   audio.currentTime = "0";
   audio.play();
}