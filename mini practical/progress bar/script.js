let numberElm = document.querySelector(".number");
let startBtn = document.querySelector(".start-btn");
let circle = document.querySelector("circle");

let progressInterval;

startBtn.addEventListener("click", () => {
  const second = document.querySelector("input").value;

  if (!second || second <= 0) return;
  clearInterval(progressInterval);
  circle.classList.remove("anim");
  void circle.offsetWidth;
  circle.style.animationName = "none";



  setTimeout(() => {
    let number = 0;

    circle.style.animationName = "anim"; 
    circle.style.animationDuration = `${second}s`;
    circle.classList.add("anim");

    let tickTime = (Number(second) * 1000) / 100;

    progressInterval = setInterval(() => {
      numberElm.innerHTML = number + "%";

      if (number >= 100) {
        clearInterval(progressInterval);
      } else {
        number++;
      }
    }, tickTime);
  }, 30);
});
