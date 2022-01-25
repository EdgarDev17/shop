const Footer = (props) => {
	return (
		<>
			<div
				className={
					'w-full py-10 border border-gray-200 grid gap-2 grid-cols-3 grid-rows-1'
				}
			>
				<div className={'flex flex-col justify-center items-center'}>
					<h1 className={'font-semibold text-md py-2'}>EdgarDev</h1>
					<div
						className={
							'flex flex-row items-center justify-center py-3'
						}
					>
						{/* <img className={'w-10 ml-5'}
                             src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494475.png?token=exp=1641608695~hmac=6f3fb7159b42f8858e58d1ee90de5cea"
                             alt=""/>
                        <img className={'w-10 ml-5'}
                             src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494488.png?token=exp=1641608712~hmac=9ac0098e02cfb6f19725624c327ae3bc"
                             alt=""/>
                        <img className={'w-10 ml-5'}
                             src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494477.png?token=exp=1641608734~hmac=ec77e5e857928e6295ecc3b1eaab371e"
                             alt=""/> */}
					</div>
				</div>

				<div>
					<h1 className={'text-md font-semibold mt-2 text-center'}>
						Atencion al cliente
					</h1>
					<p className={'mt-1 text-center'}>example@gmail.com</p>
					<p className={'mt-1 text-center'}>7990-0000</p>
				</div>

				<div>
					<h1 className={'text-md font-semibold mt-2 text-center'}>
						Encuentranos En
					</h1>
					<p className={'mt-1 text-center'}>
						Colonia Escalon, San Salvador, El salvador
					</p>
					<p className={'mt-1 text-center'}>
						Google maps: https://www.maps.direction.com
					</p>
				</div>
			</div>
		</>
	)
}

export { Footer }
