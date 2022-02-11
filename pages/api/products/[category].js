import connectionDB from '../../../lib/connection'
import Product from '../../../models/Product'

export default async function handler(req, res) {
	const { category } = req.query
	await connectionDB()

	const selectedProducts = await Product.find({
		category: `${category}`,
	})

	const products = selectedProducts.map((item) => {
		const product = item.toObject()
		product._id = `${product._id}`
		return product
	})

	await res.status(200).json(products)
}
