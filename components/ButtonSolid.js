import { useState } from 'react'

// Estas variantes son espeficicas para botones solidos
const variants = {
	primary: 'w-full bg-black px-7 py-3 rounded text-white',
	success: 'w-full bg-green-500 px-7 py-3 rounded text-white',
	warning: 'w-full bg-amber-500 px-7 py-3 rounded text-white',
	error: 'w-full bg-red-500 px-7 py-3 rounded text-white',
}

const ButtonSolid = (props) => {
	const [variant] = useState(props.variant)

	return (
		<div>
			<button className={`${variants[variant]}`}>{props.label}</button>
		</div>
	)
}

export { ButtonSolid }
