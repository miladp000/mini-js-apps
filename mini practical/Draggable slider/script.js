const tabBox = document.querySelector(".tabs-box");
const arrowIcon = document.querySelectorAll(".icon span");
const items = document.querySelectorAll(".wrapper .tab");
let activeItem;

items.forEach((item) => {
  item.addEventListener("click", () => {
    if(activeItem == item){
        item.classList.remove("active");
        activeItem = null;
    }
    else{
        item.classList.add("active");
        if(activeItem)
            activeItem.classList.remove("active");
        activeItem = item;
    }
    
  });
});

arrowIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    tabBox.style.scrollBehavior = "smooth";
    tabBox.scrollLeft += icon.id === "left" ? -350 : 350;
  });
});

let isDrag = false;

const dragging = (e) => {
  if (isDrag) {
    tabBox.style.scrollBehavior = "auto";
    tabBox.scrollLeft -= e.movementX;
  }
};
function handleArrow() {
  const scrollLeft = Math.round(tabBox.scrollLeft);
  const scrollVal = tabBox.scrollWidth - tabBox.clientWidth;
  const pad = 5;

  arrowIcon[0].parentElement.style.display = scrollLeft > pad ? "flex" : "none";
  arrowIcon[1].parentElement.style.display =
    scrollVal - pad <= scrollLeft ? "none" : "flex";
}
tabBox.addEventListener("scroll", handleArrow);

tabBox.addEventListener("mousedown", () => (isDrag = true));
tabBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", () => (isDrag = false));
