import {Schema, model, models} from "mongoose"

const product = new Schema({
  name: String,
  price: Number,
  sizes: [String],
  category: String,
  imageUrl: String,
  description: String,
  gender: String,
  stock: Number,
});

export default models.product || model('product', product, 'products')

