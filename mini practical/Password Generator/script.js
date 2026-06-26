const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const symboles = "~!@#$%^&*()_+=-?/:;<>{}[]";
let password = "";

const generateBtn = document.getElementById("generateBtn");
const passInput = document.getElementById("passInput");
const copyIcon = document.getElementById("passIcon");

generateBtn.addEventListener("click" ,createPassword);
copyIcon.addEventListener("click" , copyPassword)

function createPassword(){
    password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symboles[Math.floor(Math.random() * symboles.length)];
    const allChar = upperCase + lowerCase + numbers + symboles;
    
    while(password.length < 12){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    password = [...password].sort(() => Math.random() - 0.5).join('');
    passInput.value = password;
    
}

function copyPassword(){
    passInput.select();
    document.execCommand("copy");
}
