import {useState, useEffect} from 'react'
import LinkButton from "./LinkButton";
import {getCategoriesList} from "../services/SideNavService";
import Link from 'next/link'

//TODO: Hacer que el boton despliegue las diferentes opciones al hacer hover sobre el boton
const SideNav = () => {
    const [categoriesList, setCategoriesList] = useState([{}])
    const [toggleSubCategories, setToggleSubCategories] = useState(false)

    useEffect(() => {
        getCategoriesList()
            .then((res) => setCategoriesList(res))
    }, [])

    const handleSubCategories = () => {
        return categoriesList.map(category => <div key={category.id}><Link
            href={`home/${category.name}`}><a>{category.name}</a></Link></div>)
    }

    const onMouseHandler = (e) => {
        console.log('Mouse on hover')
        setToggleSubCategories(!toggleSubCategories)
    }

    // This constant stores every main category
    return <>
        <div className={'w-full h-full flex flex-col px-2'}>
            <div className={'w-auto h-auto flex px-2'}>
                <LinkButton pageLink={'/home'} label={'Mujeres'} onMouseHandler={onMouseHandler}/>
                <LinkButton pageLink={'/home/men'} label={'Hombres'}/>
            </div>
            <div>
                {toggleSubCategories ? handleSubCategories() : <div/>}
            </div>
        </div>
    </>
}

export default SideNav
