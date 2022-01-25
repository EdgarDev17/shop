import AppContainer from '../index'
import { Card } from '../../components/Card'
import Product from '../../models/Product'
import connectionDB from '../../lib/connection'

const Home = ({ products, category }) => {
	const renderCard = () => {
		return products.map((product) => (
			<Card
				key={product._id}
				cardSize={'large'}
				title={product.name}
				image={product.imageUrl}
				price={product.price}
				stock={product.stock}
			/>
		))
	}

	return (
		<AppContainer>
			<div className="container mx-auto my-10">
				<h2 className={'ml-5 my-10 text-3xl font-bold font-Poppins'}>
					{/* {category} */}
					category
				</h2>

				<div className="grid grid-cols-3 gap-5">{renderCard()}</div>
			</div>
		</AppContainer>
	)
}

export async function getStaticProps() {
	await connectionDB()
	const productData = await Product.find({})

	const products = productData.map((item) => {
		const product = item.toObject()
		product._id = `${product._id}`
		return product
	})

	return { props: { products } }
}

export default Home
