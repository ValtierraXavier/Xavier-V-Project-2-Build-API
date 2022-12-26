import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'
let whatAnime = "code geass"

//Below is done STOP TOUCHING IT!
async function getRandomQuote(){
fetch(`https://animechan.vercel.app/api/random/anime?title=${whatAnime}`)
          .then((response) => response.json())
          .then((quote) => fsPromises.writeFile('./db/quoteData.json',JSON.stringify(quote)))
          //.then((res) => console.log(res))
          .catch(error =>(console.log('Error:', error)))
}
//Above is done STOP TOUCHING IT!

// console.log(whatAnime.anime)
async function getAnimeData(){
fetch(`https://kitsu.io/api/edge//anime?filter%5Btext%5D=${whatAnime}`)
          .then((response) => response.json())
          .then((data) => fsPromises.writeFile('./db/animeData.json',JSON.stringify(data)))
          //.then((res) => console.log(res))
          .catch(error =>(console.log('Error:')))
}

getAnimeData();
getRandomQuote();

export default whatAnime;
