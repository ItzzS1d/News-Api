
let api = "https://newsapi.org/v2/everything?q=EveryThing&apiKey=8a5d1e0f3aa44c41933968b71e066c4d";

window.addEventListener("load", getNews);

async function getNews() {
   try{
const response = await fetch(api);
    const data = await response.json();
    bindData(data.articles)
}catch(e){
     console.log(e)
}
    
}


function bindData(article) {
    let cardsContainer = document.querySelector('#cards-container');


    let template = document.querySelector('.card-template');

    cardsContainer.innerHTML = '';

    article.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = template.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    })
}


function fillDataInCard(cardClone, article) {
    const img = cardClone.querySelector('#news-img');
    const title = cardClone.querySelector('.title');
    const date = cardClone.querySelector('.date');
    const description = cardClone.querySelector('.description');

    let convertedDate = new Date(article.publishedAt).toLocaleString();


    img.src = article.urlToImage;
    title.innerHTML = article.title;
    date.innerHTML = `${article.source.name} &dot; ${convertedDate}`;
    description.innerHTML = article.description;

    cardClone.firstElementChild.addEventListener('click', () => {
        window.open(article.url, '_blank');
    })


}

let Ipl = document.querySelector('.ipl');
let finance = document.querySelector('.finance');
let politics = document.querySelector('.politics');
let tech = document.querySelector('.tech');
let input = document.querySelector('input');
let searchBtn = document.querySelector('.searchBtn')



Ipl.addEventListener('click', async () => {
    const response = await fetch("https://newsapi.org/v2/everything?q=IPL&apiKey=8a5d1e0f3aa44c41933968b71e066c4d");
    const data = await response.json();
    bindData(data.articles);
});
finance.addEventListener('click', async () => {
    const response = await fetch("https://newsapi.org/v2/everything?q=finance&apiKey=8a5d1e0f3aa44c41933968b71e066c4d");
    const data = await response.json();
    bindData(data.articles);
});
politics.addEventListener('click', async () => {
    const response = await fetch("https://newsapi.org/v2/everything?q=politics&apiKey=8a5d1e0f3aa44c41933968b71e066c4d");
    const data = await response.json();
    bindData(data.articles);
});
tech.addEventListener('click', async () => {
    const response = await fetch("https://newsapi.org/v2/everything?q=Technology&apiKey=8a5d1e0f3aa44c41933968b71e066c4d");
    const data = await response.json();
    bindData(data.articles);
});




searchBtn.addEventListener('click', async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${input.value}&apiKey=8a5d1e0f3aa44c41933968b71e066c4d`);
    const data = await response.json();
    bindData(data.articles);

    input.value = '';

   

   
});