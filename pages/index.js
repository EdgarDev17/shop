import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'
import SideNav from '../components/SideNav'

export default function AppContainer({ children }) {
	return (
		<div className={''}>
			<Head>
				<title>EdDev Ecommerce</title>
				<meta
					name="description"
					content="Ecommerce for a clothing store"
				/>
				<link rel="icon" href={'/favicon.ico'} />
			</Head>

			<div className="flex flex-col fixed">
				<div className="my-5">
					<Nav />
				</div>
			</div>

			<div className="mt-10 pt-2 fixed">
				<SideNav />
			</div>

			<div className={'container mx-auto pt-12'}>
				<div>{children}</div>
			</div>

			<footer className={''}>
				<Footer />
			</footer>
		</div>
	)
}
