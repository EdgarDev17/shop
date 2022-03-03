import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'
import SideNav from '../components/SideNav'
import commerce from '../lib/commerce'

export default function Layout({ children }) {
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

			{/*<div className="fixed flex flex-col">*/}
			{/*	<div className="my-5">*/}
			{/*		<Nav />*/}
			{/*	</div>*/}
			{/*</div>*/}

			<div className="fixed mt-10 pt-2">
				<SideNav  />
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
