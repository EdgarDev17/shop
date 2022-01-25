const ButtonDot = (props) => {

    return (
        <>
            <button
                className={'mx-2 py-2 px-4 flex flex-row justify-center items-center rounded-full border border-gray-300 hover:border-slate-700 focus:bg-black focus:text-white'}>{props.size}</button>
        </>)
}

export { ButtonDot }