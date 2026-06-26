const cursor = document.getElementById("custom-cursor");
const hero = document.querySelector(".hero");
const img = document.querySelector(".hero img");
const shadowWalk = 100; // 100px


//Funsctions
function shadow(e){
    let {offsetWidth: width,offsetHeight: height } = hero;
    let {offsetX: x , offsetY: y} = e;

    if(this !== e.target){
        x = x + e.target.offsetLeft ;
        y = y + e.target.offsetTop;
    }

    let xWalk = Math.floor(x / width * shadowWalk) - shadowWalk/2;
    let yWalk = Math.floor(y / height * shadowWalk) - shadowWalk/2;
    xWalk =  -xWalk * 1.1;
    yWalk =  -yWalk * 1.1;

    const distance = Math.floor(Math.sqrt((xWalk * xWalk) + (yWalk * yWalk)));
    const sc = distance * 8 / (shadowWalk / 2); // shadow concentration

    

    console.log(distance)
    img.style.filter = `drop-shadow(${xWalk}px ${yWalk}px ${sc}px rgba(0,0,0,0.6))`
    
}




//EventListeners


window.addEventListener("mousemove" ,  (e) =>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY +"px";
    shadow(e);
})