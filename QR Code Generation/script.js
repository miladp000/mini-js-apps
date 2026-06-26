const text = document.getElementById("qr-input");
const qrImage = document.getElementById("qr-img");
const generateBtn = document.querySelector(".generate-btn");
let qrBox = document.querySelector(".qr-box");
let qr_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

generateBtn.addEventListener("click" , () =>{
    generateQR();
});

function generateQR(){
    if(text.value.length > 0){
        qrBox.classList.add("show");
        qrImage.src = qr_url + text.value;
       
    }
    else{
        text.classList.add("error");
        text.setAttribute("placeholder" , "Write somthing...!");
        setTimeout(()=>{
            text.classList.remove("error");
        },300);
        setTimeout(()=>{
            text.setAttribute("placeholder" , "");
        },2000);
        qrBox.classList.remove("show");
    }
}