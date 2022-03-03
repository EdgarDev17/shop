import React from 'react'
import commerce from '../../lib/commerce'
import { getSubCategories } from '../../services/menu/menuCategories';

const getData = ({ categoriesList }) => {
	console.log(categoriesList)
	const testingData = categoriesList.map(item => { return <p key={item.id}>{item.name}</p>})

	return <div>
		{
			testingData
		}
	</div>
}

export async function getStaticProps() {
	const categoriesList = await commerce.categories
		.list()
		.then((res) => res.data)
	return { props: { categoriesList } }
}

export default getData
