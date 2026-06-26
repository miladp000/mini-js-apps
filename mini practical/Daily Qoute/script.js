let quote_url = "https://motivational-spark-api.vercel.app/api/quotes/random";

const quoteBtn = document.getElementById("quote-btn");
const twitterbtn = document.getElementById("twitter-btn");
const quoteContainer = document.querySelector(".quote");
const authorContainer = document.querySelector(".author");

quoteBtn.addEventListener("click" , () =>{
    quoteReplace(quote_url)
});
twitterbtn.addEventListener("click" , tweet)

async function quoteReplace(url){
    let quote = await fetch(url);
    const data = await quote.json();
    
    quoteContainer.innerHTML = data.quote;
    authorContainer.innerHTML = data.author;
    
}

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quoteContainer.innerHTML}` + "  ---- "  + authorContainer.innerHTML,
        "Tweet Window" , "width: 600px ; height: 300px"
    )
}

quoteReplace(quote_url);