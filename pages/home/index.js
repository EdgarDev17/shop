import AppContainer from '../index'
import { Card } from '../../components/Card'
// import Product from '../../models/Product'
// import connectionDB from '../../lib/connection'
import commerce from '../../lib/commerce'

const Home = ({ products, merchantData }) => {

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
		<AppContainer>
			<div className="container mx-auto my-10">
				<h2 className={'font-Poppins my-10 ml-5 text-3xl font-bold'}>
					{/* {category} */}
					category
				</h2>

				<div className="grid grid-cols-3 gap-5">{renderCard()}</div>
			</div>
		</AppContainer>
	)
}

export async function getStaticProps() {
	const merchantData = await commerce.merchants.about()
	const products = await commerce.products.list().then(res => res.data)
	return { props: { products, merchantData } }
}

export default Home
