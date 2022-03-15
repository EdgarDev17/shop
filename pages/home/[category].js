import commerce from '../../lib/commerce'
import { Card } from '../../components/Card'

export const getStaticPaths = async () => {
	let res = await commerce.categories.list()
	let categoriesArray = res.data

	const paths = categoriesArray.map((category) => {
		return {
			params: { category: category.slug },
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params }) => {
	// I have to make a get petitions using params (params :{category: name})
	console.log(params.category)
	const res = await commerce.products.list({
		category_slug: [`${params.category}`],
	})

	const products = await res.data
	return { props: { products } }
}

const Category = ({ products }) => {
	const cards = products.map((product) => {
		if (product) {
			return (
				<Card
					key={product.id}
					cardSize={'large'}
					image={product.image.url}
					title={product.name}
					price={product.price.formatted_with_symbol}
				/>
			)
		} else {
			return <p>Error</p>
		}
	})

	return (
		<div>
			<h1 className={'font-Poppins my-10 ml-5 text-3xl font-bold'}>
				category
			</h1>
			{/* <h1>{products[0].categories[0]}</h1> */}
			<div className={'flex flex-row'}>{cards}</div>
		</div>
	)
}

export default Category
