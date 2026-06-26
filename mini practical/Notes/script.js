const createBtn  = document.querySelector(".container button");
const noteContainer = document.querySelector(".notes-container");

createBtn.addEventListener("click" , createNote);
noteContainer.addEventListener("click" , (e)=>{
    const {target} = e;
    if(target.tagName === "IMG"){
        target.parentElement.remove();
        updateStorage();
    }
    else if(target.tagName === "P"){
        target.addEventListener("keyup" ,updateStorage)
    }
});
noteContainer.addEventListener("keydown" , (e) =>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
        updateStorage();
    }
})

//-----Functions

function updateStorage(){
    localStorage.setItem("note-project" ,noteContainer.innerHTML);
}
function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("note-project");
}

function createNote(){
    const noteBox = document.createElement("div")
    noteBox.classList.add("note-box");
    const p = document.createElement("p");
    p.classList.add("note");
    p.contentEditable = true;
    const removeImg = document.createElement("img");
    removeImg.src = "images/delete.png";
    noteBox.appendChild(p);
    noteBox.appendChild(removeImg);
    noteContainer.appendChild(noteBox);
}
showNotes();