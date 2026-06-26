const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
let searchResult = document.querySelector(".search-result");
let moreBtn = document.querySelector(".show-more");
const form= document.querySelector("form");
let serverErr = document.querySelector(".error");

let page = 1;
const myKey = "KHKeTaXTasyz7HcOT0y3Ye1UWN2_mUxdjOONso5uyLM";

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    page = 1;
    loadData();
});
moreBtn.addEventListener("click" , ()=>{
    page++;
    loadData()
})

async function loadData(){
    const value = searchInput.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${value}&client_id=${myKey}`;
    console.log(value);
    
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("HTTP Error!");
        }
        let data = await response.json();
        const results = data.results;
        if(page == 1){
            searchResult.innerHTML = "";
        }
        results.forEach(r => {
            const downloadLink =  r.links.download.match(/^.*download\?/) + "force=true";
            mapImage(r.urls.small, r.links.html , r.description,downloadLink);
            console.log(r);
        });
        moreBtn.style.display = "block";
        serverErr.style.display = "none";
    }
    catch(error){
        console.log("Error: " , error);
        moreBtn.style.display = "none";
        serverErr.style.display = "block";
        serverErr.innerHTML = "Error: " + error;
    }
    
}

function mapImage(url , href , description , download){
    // Define
    let imgContainer = document.createElement("div");
    let imgLink = document.createElement("a");
    let imageEl = document.createElement("img");
    let likeThisBtn = document.createElement("button");
    let downloadBtn = document.createElement("a");

    //downloadbtn
    downloadBtn.innerHTML = "Download";
    downloadBtn.classList.add("download");
    downloadBtn.target= "_blank"
    downloadBtn.href = download;


    //likeThisbtn
    likeThisBtn.innerHTML = "Like This";
    likeThisBtn.classList.add("like-this");
    likeThisBtn.addEventListener("click" ,() =>{
        if(description !== ""){
            searchInput.value = description;
            page = 1;
            loadData();
        }
    });

    //imgLink
    imgLink.href = href;
    imgLink.target = "_blank";
    imgLink.classList.add("img-link")

    
    //imageEl
    imageEl.src = url;

    //append
    imgContainer.appendChild(likeThisBtn);
    imgContainer.appendChild(downloadBtn);
    imgLink.appendChild(imageEl);
    imgContainer.appendChild(imgLink);
    searchResult.appendChild(imgContainer);
}