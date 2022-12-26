import mongoose from 'mongoose'

let animeData = new mongoose.Schema({
//     data:{
//     attributes:{
//     slug: String,
//     synopsis: String,
    // titles: {
    //     en: String, 
    //     en_jp: String,
    //     ja_jp: String
    // },
    // averageRating: Number,
    // startDate: Date,
    // endDate: Date,
    // status: String
    // }
// }
    data: [{
        attributes: {
        slug: String,
        synopsis: String,
        titles: {
            en: String, 
            en_jp: String,
            ja_jp: String
        },
        averageRating: Number,
        startDate: Date,
        endDate: Date,
        status: String
        }
        }
    ]
})
export default mongoose.model("AnimeData", animeData)