// Variables
const taskInput = document.querySelector(".to-do input");
const addBtn = document.querySelector('.to-do button');
let lists = document.querySelector('ul.lists');


// Events
addBtn.addEventListener("click", addTask);

lists.addEventListener("click" , (e) =>{
    const {target} = e;
    if(target.tagName == "LI"){
        target.classList.toggle("checked");
        saveTasks()
    }
    if(target.tagName == "SPAN"){
        target.parentNode.remove();
        saveTasks()
    }
})



// functions
function addTask(){
    const value = taskInput.value;
    if(value === ""){
        alert("You should write something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = value;
        let removeBtn = document.createElement("span");
        removeBtn.innerHTML = "&#9747";
        li.appendChild(removeBtn);
        lists.appendChild(li);
    }
    taskInput.value = "";
    saveTasks()
}

function saveTasks(){
    localStorage.setItem("to-do-list",lists.innerHTML);
}
function loadTasks(){
    lists.innerHTML = localStorage.getItem("to-do-list");
}
loadTasks()