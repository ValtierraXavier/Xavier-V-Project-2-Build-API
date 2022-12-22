import connection from 'connection.js'
import mongoose from 'mongoose'

let Quotes = new mongoose.Schema({
    data: Object
})

export default mongoose.model('quotes',Quotes)