import { Card } from '../../components/Card'
import commerce from '../../lib/commerce'

const Home = ({ products, categories }) => {
	const renderCard = () => {
		return products.map((product) => (
			<Card
				key={product.id}
				cardSize={'large'}
				title={product.name}
				image={product.image.url}
				price={product.price.formatted}
				stock={product.inventory.available}
			/>
		))
	}

	return (
		<div className="container mx-auto my-10">
			<h2 className={'font-Poppins my-10 ml-5 text-3xl font-bold'}>
				category
			</h2>

			<div className="grid grid-cols-3 gap-5">{renderCard()}</div>
		</div>
	)
}

export async function getStaticProps() {
	const products = await commerce.products.list().then((res) => res.data)
	const categories = await commerce.categories.list()

	// console.debug(categories)
	return { props: { products, categories } }
}

export default Home
