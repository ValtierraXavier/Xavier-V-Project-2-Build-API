import Data from '../Models/Info.js'

export const getAllData = async (req,res) =>{
    try {
        const info = await Data.find({})
        res.json(info)
    } catch (error) {
        console.log('error: ', error)
    }
}

export const getData = async (req,res) =>{
    try {
        const {id} = req.params
        const info = await Data.findById(id)
        if(info){
            res.json(info)
        }
    } catch (error) {
        console.log('error: ', error)
    }
}

export const createData = async (req,res) => {
try {
    const {id} = req.params
    const info = new Data(req.body)
    await info.save()
    await res.send(`Added :\n\n ${info} \n\nto the DB`)
} catch (error) {
    console.log('error: ', error)
}
}

export const updateData = async(req,res) => {
    try {
        const {id} = req.params
        const info = await Data.findByIdAndUpdate(id, req.body)
        const newOne = await Data.findById(id)
        await res.send(`Updated:\n ${newOne}`)
    } catch (error) {
        console.log('error: ', error)
    }
}

export const deleteData = async (req,res) =>{
    try{
    const {id} =req.params
    const deleted = await Data.findById(id)
    await Data.findByIdAndDelete(id)
    await res.send(`Deleted:\n${deleted}`)
    }catch (error) {
        console.log('error: ', error)
    }
}