import { ButtonSolid } from '../components/ButtonSolid'
import { Card } from '../components/Card'
import Layout from '../components/Layout'

const LandingPage = (props) => {
	return (
		<>
			<div>
				{/*Seccion de ofertas*/}
				<div className={'absolute top-1/4 left-3/4 text-7xl font-bold'}>
					<h2>SALE</h2>
					<h2 className={'my-5 text-xl'}>up to</h2>
					<h2>50%</h2>

					<div className={'mt-5 w-56 text-lg'}>
						<ButtonSolid
							label={'Mirar Ofertas'}
							variant={'primary'}
						/>
					</div>
				</div>

				<img
					className={'h-full w-full'}
					src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					alt=""
				/>
			</div>

			<div className={'contentDiv w-full'}>
				<div className={'flex flex-wrap  items-center justify-center'}>
					<div
						className={'flex flex-col items-center justify-center'}
					>
						<h2 className={'font-Poppins my-10 text-5xl font-bold'}>
							Mira nuestra nueva coleccion
						</h2>
						<button
							className={
								'rounded bg-black py-5 px-16 text-white hover:bg-green-500 hover:font-bold'
							}
						>
							CONOCER MAS
						</button>
					</div>

					<img
						className={''}
						src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
						alt=""
					/>
				</div>
				<div className="container mx-auto my-10">
					<h2
						className={
							'font-Poppins my-10 ml-36 text-3xl font-bold'
						}
					>
						Productos mas vendidos
					</h2>

					<div className="grid grid-cols-3 gap-5"></div>
				</div>
			</div>
		</>
	)
}

export default LandingPage
