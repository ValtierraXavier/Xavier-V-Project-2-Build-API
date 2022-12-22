import db from'./db/connection.js'
import connection from './db/connection.js'
import express from 'express'
import quote from './models/Quote.js' //assert{type: 'json'}
import { Script } from 'vm';

let app = express();
Port = 3000 || process.env.PORT;

app.listen(PORT, () =>
console.log('Listening on port: ',PORT)
)

app.get('/quote', (req, res) =>{
    quote.find({})
   .then(said => {
    res.json(said)
    Script(npm.run.start)
   })
}
)
    
