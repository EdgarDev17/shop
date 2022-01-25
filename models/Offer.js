import { Mongoose } from "mongoose"

const schema = new Mongoose.Schema({
    offerName: String,
    price: Number
})

export default mongoose.models.Offer || mongoose.model('Offer', schema)