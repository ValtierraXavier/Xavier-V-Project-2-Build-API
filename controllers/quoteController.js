import Data from '../Models/Quote.js'
import chalk from 'chalk'

export const getQuotes = async (req,res) =>{
    try {
        const quote = await Data.find({})
        res.json(quote)
    } catch (error) {
        console.log('error: ', error)
    }
}

export const getQuote = async (req,res) =>{
    try {
        const {id} = req.params
        const quote = await Data.findById(id)
        if(quote){
            res.json(quote)
        }
    } catch (error) {
        console.log('error: ', error)
    }
}

export const createQuote = async (req,res) => {
try {
    //const {id} = req.params
    const quote = new Data(req.body)
    await quote.save()
    await res.send(`${quote}\n\bwas entered into the DB\b`)
} catch (error) {
    console.log('error: ', error)
}
}

export const updateQuote = async(req,res) => {
    try {
        const {id} = req.params
        const oldOne = await Data.findById(id)
        const quote = await Data.findByIdAndUpdate(id, req.body)
        await quote.save()
        const newOne = await Data.findById(id)
        await res.send(`${oldOne} \nwas changed to\n ${newOne}`)
    } catch (error) {
        console.log('error: ', error)
    }
}

export const deleteQuote = async (req,res) =>{
    try{
    const {id} =req.params
    const deleted = await Data.findById(id)
    const quote = await Data.findByIdAndDelete(id)
    await res.send(`Deleted:\n ${deleted}`)
    }catch (error) {
        console.log('error: ', error)
    }
}