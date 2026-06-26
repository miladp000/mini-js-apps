const box = document.querySelector(".img-box");
const bgImg = document.getElementById("bg-image");
const orgImg = document.getElementById("org-image");
const orgImgWrap = document.querySelector(".or-img-wrap");
const triger = document.querySelector(".img-box span");
const trigerImg = document.querySelector(".img-box span img");

const leftOffset = box.offsetLeft;
orgImg.style.width = box.offsetWidth + "px";

let isDraging = false;

trigerImg.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDraging = true;
});
triger.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDraging = true;
});
window.addEventListener("mouseup", () => {
  isDraging = false;
});

window.addEventListener("mousemove", (e) => {
  if (!isDraging) return;

  let imgWidth = e.pageX - leftOffset;

  if (imgWidth < 0) imgWidth = 0;
  if (imgWidth > box.offsetWidth) imgWidth = box.offsetWidth;

  orgImgWrap.style.width = imgWidth + "px";
  triger.style.left = imgWidth + "px";
});
