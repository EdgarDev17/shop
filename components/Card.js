import { ButtonDot } from './ButtonDot'
import { ButtonSolid } from './ButtonSolid'
import { useState } from 'react'
import Image from 'next/image'

const sizes = {
	large: 'w-96 my-5 mx-5 border rounded',
	medium: 'w-72 my-5 mx-5 border rounded',
	small: 'w-48 my-5 mx-5 border rounded',
}

const Card = (props) => {
	const [variant, setVariant] = useState(props.cardSize)
	return (
		<div className={sizes[variant]}>
			<div>
				<Image
					src={String(props.image)}
					alt={'This is how this product look like'}
					width={600}
					height={700}

				/>
			</div>
			<p className={'my-5 ml-5 text-lg font-bold'}>{props.title}</p>
			<p
				className={'text-md my-5 ml-5 text-gray-700'}
			>{`Quedan ${props.stock} en stock`}</p>
			<p className={'text-md my-5 ml-5 text-gray-700'}>${props.price}</p>
			
			<div
				className={'mt-5 flex flex-row flex-nowrap justify-evenly pt-1'}
			>
				<ButtonDot size={'XS'} />
				<ButtonDot size={'X'} />
				<ButtonDot size={'M'} />
				<ButtonDot size={'L'} />
				<ButtonDot size={'XL'} />
			</div>

			<div className="mt-10 mb-5 flex w-full flex-row content-center justify-center">
				<ButtonSolid label={'Agregar al carrito'} variant={'primary'} />
			</div>
		</div>
	)
}

export { Card }
