import commerce from '../lib/commerce'
import {useState, useEffect} from 'react'
import LinkButton from "./LinkButton";

const SideNav = () => {
    const [categoriesList, setCategories] = useState([{}])

    useEffect(() => {
        commerce.categories
            .list()
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    // This constant stores every main category
    const mappingCategories = categoriesList.map((category) => {
        return <p key={category.id}>{category.name}</p>
    })

    return <>{
        <div>
            <LinkButton label={'Mujeres'}/>
            <LinkButton label={'Hombres'}/>
        </div>}
    </>
}

export default SideNav
