import axios from 'axios'

export const getProductByCategory = async (category) => {
	axios
		.get(`http://localhost:3000/api/products/${category}`)
		.then((res) => {
			const dataObject = res.data
			return dataObject
		})
		.catch((err) => {
			return console.log(err)
		})
}
