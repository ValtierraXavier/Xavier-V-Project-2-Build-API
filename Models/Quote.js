import mongoose from 'mongoose'
//import data from './db/quoteData.json' assert{type: 'json'}

let Quote = new mongoose.Schema({
    anime: {type: String},
    character:{type: String},
    quote:{type: String}
}) 

export default mongoose.model('Quote', Quote)