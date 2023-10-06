const API_KEY="09e8509c4cf149f6b5669d2ccb1d777d";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener('load',() => fetchNews("India"));

async function fetchNews(query)
{
   const res=await fetch('${url}${query}&apiKey=${API_KEY}');
   const data= await res.json();
   bindData(data.articles);
}

function bindData(articles)
{

}