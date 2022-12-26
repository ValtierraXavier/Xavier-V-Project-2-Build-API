import db from'./db/connection.js'
import connection from './db/connection.js'
import express from 'express'
import quote from './Models/Quote.js' //assert{type: 'json'} 
import info from './Models/Info.js'

let app = express(); 

let Port = 3000 || process.env.PORT;

app.listen(Port, () =>
console.log('Listening on port: ', Port)
)

app.get('/quote', (req, res) =>{
    quote.find({})
   .then(said => {
    res.json(said)
   })
}
)
app.get('/info', (req, res)=>{
info.find({})
.then(inpho => {
    res.json(inpho)
})
})   


