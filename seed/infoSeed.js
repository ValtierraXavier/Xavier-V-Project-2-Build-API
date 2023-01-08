import connection from '../db/connection.js'
import data from '../db/animeData.json' assert{type: 'json'}
import animeData from '../Models/Info.js'
import mongoose from 'mongoose'

try{
    await animeData.deleteMany({})
    await animeData.create(data)
    console.log('Done!')
    mongoose.disconnect()
}catch(error){console.log('Error: ', error)}