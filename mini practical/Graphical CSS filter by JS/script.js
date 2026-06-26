const filterInputs = document.querySelectorAll("input");
const resetBtn = document.getElementById("reset-btn");

filterInputs.forEach(inp =>{
    inp.addEventListener("change" , (e)=>{
        handleFilters(e.target);
    });
    inp.addEventListener("mousemove" , (e)=>{
        handleFilters(e.target);
    });
});
resetBtn.addEventListener("click" , reset);


function handleFilters(inp){
        let unit = inp.dataset.size || "";        
        document.documentElement.style.setProperty(`--${inp.name}` , `${inp.value}${unit}`)
}

function reset(){
    filterInputs.forEach(inp=>{
        inp.value = inp.dataset.value;
        handleFilters(inp)
    })
}