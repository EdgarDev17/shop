import { useState, useEffect } from 'react'
import LinkButton from './LinkButton'
import {
	getCategoriesList,
	getCategoriesByParent,
} from '../services/SideNavService'
import Link from 'next/link'

const SideNav = () => {
	const [categoriesList, setCategoriesList] = useState([{}])
	const [subCategoriesList, setSubCategoriesList] = useState([{}])

	const [toggleSubCategories, setToggleSubCategories] = useState(false)
	const [toggleExtraCategories, setToggleExtraCategories] = useState(true)

	useEffect(() => {
		getCategoriesList().then((categoriesArray) => {
			setCategoriesList(categoriesArray)
			return categoriesArray
		})
	}, [])

	const getCategoryByParent = (parent) => {
		getCategoriesByParent(parent)
	}

	const renderCategories = () => {
		return categoriesList.map((category) => (
			<div key={category.id} className={'flex flex-row'}>
				<div className='my-3'>
					<LinkButton
						pageLink={`/home/${category.slug}`}
						label={category.slug}
					/>
				</div>
			</div>
		))
	}

	const renderSubCategories = (parent) => {
		return subCategoriesList.map((category) => (
			<div key={category.id}>
				<Link href={`/home/${category.slug}`}>
					<a>{category.name}</a>
				</Link>
			</div>
		))
	}

	const onMouseHandlerSubCategories = (e) => {
		setToggleSubCategories(!toggleSubCategories)
	}

	return (
		<>
			<div className={'flex h-full w-full flex-col px-2'}>
				<div className={'mt-10 mb-5 flex h-auto w-auto px-2'}>
					<LinkButton
						pageLink={'/home'}
						label={'Mujeres'}
						onMouseHandler={onMouseHandlerSubCategories}
					/>

					<LinkButton pageLink={'/home/men'} label={'Hombres'} />
				</div>
				<div>{toggleSubCategories ? renderCategories() : <div />}</div>
				<div>
					{toggleExtraCategories ? renderSubCategories() : <div />}
				</div>
			</div>
		</>
	)
}

export default SideNav
