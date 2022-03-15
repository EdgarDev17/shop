const ButtonDot = (props) => {
	return (
		<>
			<button
				className={
					'mx-2 flex flex-row items-center justify-center rounded-full border border-gray-300 py-2 px-4 hover:border-slate-700 focus:bg-black focus:text-white'
				}
			>
				{props.size}
			</button>
		</>
	)
}

export { ButtonDot }
