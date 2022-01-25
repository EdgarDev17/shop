import { ButtonDot } from './ButtonDot'
import { ButtonSolid } from './Button'
import { useState } from 'react'

const sizes = {
	large: 'w-96 my-5 mx-5 border rounded',
	medium: 'w-72 my-5 mx-5 border rounded',
	small: 'w-48 my-5 mx-5 border rounded',
}

const Card = (props) => {
	const [variant, setVariant] = useState(props.cardSize)
	return (
		<div className={sizes[variant]}>
			<img className={'w-full h-2/3'} src={props.image} alt="" />
            
			<p className={'text-lg font-bold ml-5 my-5'}>{props.title}</p>
			<p
				className={'text-md ml-5 my-5 text-gray-700'}
			>{`Quedan ${props.stock} en stock`}</p>
			<p className={'text-md ml-5 my-5 text-gray-700'}>${props.price}</p>
			<div
				className={'flex flex-row flex-nowrap justify-evenly mt-5 pt-1'}
			>
				<ButtonDot size={'XS'} />
				<ButtonDot size={'X'} />
				<ButtonDot size={'M'} />
				<ButtonDot size={'L'} />
				<ButtonDot size={'XL'} />
			</div>
			<div className="w-full mt-10 flex flex-row justify-center content-center">
				<ButtonSolid label={'Agregar al carrito'} variant={'primary'} />
			</div>
		</div>
	)
}

export { Card }
