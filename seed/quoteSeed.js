import mongoose from 'mongoose'
import db from '../db/connection.js'
import data from '../db/quoteData.json' assert{type: 'json'}
import Model from '../Models/Quote.js'


try{
await Model.insertMany(data)
//await Model.deleteMany({})
console.log('Done!')
mongoose.disconnect()
}catch(error){console.log('Error:', error)}

