const backBtn = document.querySelector(".back-btn");
const nextBtn = document.querySelector(".next-btn");
const gallery = document.querySelector(".gallery");

gallery.addEventListener("wheel" , (e)=> {
    e.preventDefault();
    gallery.scrollLeft += e.deltaY; 
    gallery.style.scrollBehavior = "auto";

});
backBtn.addEventListener("click" , () =>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft -= gallery.clientWidth;
});
nextBtn.addEventListener("click" , () =>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft += gallery.clientWidth;
})
