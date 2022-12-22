import db from'./db/connection.js'
import express from 'express'
import aniData from './animeData.json'assert{type: 'json'}

let app = express();

app.listen(3000, () =>
console.log('Listening on 3000')
)

app.get('/quote', (req, res)=> {
    aniData.find({})
    .then(res.send(aniData.json()))

    })

