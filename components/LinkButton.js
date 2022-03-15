import Link from 'next/link'

const LinkButton = ({label, pageLink, onMouseHandler}) => {


    return (
        <>
            <Link href={pageLink}>
                <a className={'bg-black text-white text-center px-4 py-2 rounded mx-2'} onMouseEnter={onMouseHandler}>{label}</a>
            </Link>
        </>
    )
}

export default LinkButton