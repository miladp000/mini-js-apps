let image = document.getElementById("pro-image");
const imgBtn = document.querySelectorAll(".select span");

let activeImg = imgBtn[0];
imgBtn.forEach((bt , i) =>{
    bt.addEventListener("click" ,(e)=>{
        activeImg.classList.remove("active");
        activeImg = e.target;
        bt.classList.add("active");
        image.src = `images/image${i+1}.png`;
    })
})