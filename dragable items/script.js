const left = document.querySelector(".left");
const right = document.querySelector(".right");
const items = document.querySelectorAll(".item");

let selected = null;

items.forEach((item) => {
  item.draggable = "true";
  item.addEventListener("dragstart", (event) => {
    selected = event.target;
  });
});

right.addEventListener("dragover", (e) => {
  e.preventDefault();
});

right.addEventListener("drop", (e) => {
  if (selected) {
    right.appendChild(selected);
    selected = null;
  }
});

left.addEventListener("dragover", (e) => {
  e.preventDefault();
});
left.addEventListener("drop", (e) => {
  if (selected) {
    left.appendChild(selected);
    selected = null;
  }
});
