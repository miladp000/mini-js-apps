const inp = document.getElementById("date-input");
const btn = document.getElementById("calc-btn");
let calcDiv = document.querySelector(".calculator");

inp.value = new Date().toISOString().split("T")[0];
inp.max = new Date().toISOString().split("T")[0];

btn.addEventListener("click" , calculateAge);

function calculateAge(){
    let myDate = new Date(inp.value);
    let currentDate = new Date();
    let cy = currentDate.getFullYear();
    let cm = currentDate.getMonth() + 1;
    let cd = currentDate.getDate();
    let my = myDate.getFullYear();
    let mm = myDate.getMonth() + 1;
    let md = myDate.getDate();
    let y,m,d ;

    y = cy - my ;
    if(cm >= mm){
        m = cm - mm;
    }
    else{
        m = 12 + cm - mm;
        y--;
    }
    if(cd >= md){
        d = cd - md;
    }
    else{
        m--;
        d = getMaxDayOfAMonth(y,m -1) + cd - md;
    }
    if(m < 0){
        y-- ; 
        m = 12;
    }
    appendToDoc(y,m,d);
}// calculateAge

function getMaxDayOfAMonth(year , month){
    return new Date(year , month , 0).getDate();
}
function appendToDoc(y,m,d){
    let result = document.querySelector(".result");
    result.innerHTML = `You are <span class="year">${y}</span> years, <span class="month">${m}</span> months and <span class="day">${d}</span> days`
    calcDiv.appendChild(result);
}