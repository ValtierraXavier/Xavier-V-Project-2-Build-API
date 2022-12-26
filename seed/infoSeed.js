import db from '../db/connection.js'
import data from '../db/animeData.json' assert{type: 'json'}
import Model from '../Models/Info.js'
import mongoose from 'mongoose'

try{
    await Model.deleteMany({})
    await Model.create(data)
    console.log('Done!')
    mongoose.disconnect()
}catch(error){console.log('Error: ', error)}