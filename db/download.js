import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'
export let whatAnime = "bleach"

//Below is done STOP TOUCHING IT!
export async function getRandomQuote(){
fetch(`https://animechan.vercel.app/api/quotes`)
          .then((response) => response.json())
          .then((quote) => fsPromises.writeFile('./db/quoteData.json', JSON.stringify(quote)))
          //.then((res) => console.log(res))
          .catch(error =>(console.log('Error:', error)))
}
//Above is done STOP TOUCHING IT!

// console.log(whatAnime.anime)
export async function getAnimeData(){
fetch(`https://kitsu.io/api/edge//anime?filter%5Btext%5D=${whatAnime}`)
          .then((response) => response.json())
          .then((data) => fsPromises.writeFile('./db/animeData.json',JSON.stringify(data)))
          //.then((res) => console.log(res))
          .catch(error =>(console.log('Error:')))
}

getAnimeData();
getRandomQuote();
export default whatAnime

