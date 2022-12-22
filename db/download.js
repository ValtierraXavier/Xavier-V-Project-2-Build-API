import fetch from 'node-fetch'
//import connection from ''
import fs from 'fs'
import {promises as fsPromises} from 'fs'

async function getRandomQuote(){
fetch("https://animechan.vercel.app/api/random")
          .then((response) => response.json())
          .then((quote) => fsPromises.writeFile('./db/quoteData.json',JSON.stringify(quote)))
          //.then((res) => console.log(res))
          .catch(error =>(console.log('Error:', error)))
}

async function getAnimeData() {
fetch("https://kitsu.io/api/edge/anime")
          .then((response) => response.json())
          .then((data) => fsPromises.writeFile('./db/animeData.json',JSON.stringify(data)))
          //.then((res) => console.log(res))
          .catch(error =>(console.log('Error:')))
}

getAnimeData();
getRandomQuote();

