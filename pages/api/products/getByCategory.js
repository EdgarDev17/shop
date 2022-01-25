import connectionDB from '../../../lib/connection'
import Product from '../../../models/Product';

export default async function handler(req, res) {
	connectionDB()  
    const productById = await Product.find({category:`${req.}`)
}