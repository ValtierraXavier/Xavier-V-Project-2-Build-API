import mongoose from 'mongoose'

let connectConfig = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

mongoose.set('strictQuery', true)

//mongoose.connect('mongodb://127.0.0.1:27017/Quote', connectConfig)

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/example'

mongoose.connect(url, connectConfig)


mongoose.connection.on('connected', () => console.log('Connected!'))
mongoose.connection.on('disconnected', () => console.log('Disconnected.'))
mongoose.connection.on('error', () => console.log('Error:', error))

//mongoose.disconnect()
export default mongoose.connection;