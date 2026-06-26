const ul = document.querySelector('ul'),
input = ul.querySelector('input'),
countNum = document.querySelector('.details p span');

const maxTag = 10;
let tags = [];

countTag();

function countTag(){
    input.focus();
    countNum.textContent = maxTag - tags.length;
}

function createTag(){
    ul.querySelectorAll("li").forEach(li => {li.remove();});
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this , '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin" , liTag);
    });
    countTag();
}

function remove(element , tag){
    let index = tags.indexOf(tag);
    // tags = [...tags.slice(0,index),...tags.slice(index + 1)];//master way
    tags.splice(index,1);// my way
    element.parentElement.remove(); // removing li of removed tag
    countTag();
}

function addTag(e){
    if(e.key == "Enter"){
        let tag = e.target.value.replace(/\s+/g , " ");
        if(tag.length > 1 && !tags.includes(tag)){
            if(tags.length < maxTag){
                tag.split(',').forEach(tag => {
                    if(!tags.includes(tag)){
                        tags.push(tag);
                        createTag();
                    }
                    
                });
            }
        }
        e.target.value = "";
    }
}

input.addEventListener('keyup' , addTag);

const removeBtn = document.querySelector('.details button');

removeBtn.addEventListener('click' , ()=> {
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => {li.remove();});
    countTag();
})