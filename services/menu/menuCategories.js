import axios from 'axios'

export const getSubCategories = (category) => {
	console.log('AXIOS: ' + category)

	return axios
		.get(`http://localhost:3000/api/menu/${category}`)
		.then((res) => res.data)
}

// this function return all main categories
export const getCategories = () => {
	return axios
		.get('http://localhost:3000/api/menu/categories')
		.then((res) => res.data)
}
