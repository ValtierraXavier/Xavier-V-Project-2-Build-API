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
} catch (error) {
    console.log('error: ', error)
}
}

export const updateData = async(req,res) => {
    try {
        const {id} = req.params
        const info = await Data.findByIdAndUpdate(id, req.body)
        await info.save()
    } catch (error) {
        console.log('error: ', error)
    }
}

export const deleteData = async (req,res) =>{
    try{
    const {id} =req.params
    const info = await Data.findByIdAndDelete(id)
    }catch (error) {
        console.log('error: ', error)
    }
}