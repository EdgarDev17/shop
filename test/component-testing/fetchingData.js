// SIDENAV
import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import {
	getCategories,
	getSubCategories,
} from '../services/menu/menuCategories'

const SideNav = () => {
	// Theese states are important for navbar works right
	const [data, setData] = useState([{}])
	const [category, setCategory] = useState('')
	const [isShown, setIsShown] = useState(false)
	const [subCategoriesShown, setSubCategoriesShown] = useState(false)
	const [subCategoriesList, setSubCategoriesList] = useState([{}])

	// Fetching subcategories from api
	useEffect(() => {
		getSubCategories({category})
			.then((data) => {
				setSubCategoriesList(data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [category])

	// fetching main categories from api
	useEffect(() => {
		getCategories().then((data) => {
			console.log(data)
			setCategory(data)
		})
	}, [])

	const toggleCategories = () => {
		setIsShown(!isShown)
	}

	const toggleSubCategories = (category) => {
		if (category === 'ropa') {
			setCategory(String(category))
			setSubCategoriesShown(!subCategoriesShown)
		}

		if (category === 'accesorios') {
			setCategory(String(category))
			setSubCategoriesShown(!subCategoriesShown)
		}

		if (category === 'zapatos') {
			setCategory(String(category))
			setSubCategoriesShown(!subCategoriesShown)
		}
	}

	const showCategories = () => {
		return data.map((item) => {
			return (
				<a
					key={item.name}
					href={`#`}
					className={
						'mt-3.5 py-2 px-5 hover:bg-black hover:text-white hover:rounded'
					}
					onClick={() => toggleSubCategories(item.name)}
				>
					{item.name}
				</a>
			)
		})
	}

	const showSubcategories = () => {
		return subCategoriesList.map((item) => (
			<Link
				key={item.name}
				href={`/home/[category]`}
				as={`/home/${item.name}`}
			>
				<a
					key={item.name}
					className={
						'w-min py-2 px-5 mt-1 hover:bg-black hover:text-white rounded'
					}
				>
					{item.name}
				</a>
			</Link>
		))
	}

	return (
		<>
			<div
				className={
					'w-52 h-full mt-12 flex flex-col justify-evenly items-center'
				}
			>
				<div>
					<Link href={'/home'}>
						<a
							href="#"
							className={
								'py-3 px-5 my-1 rounded hover:bg-black hover:text-white'
							}
							onClick={() => toggleCategories()}
						>
							Mujeres
						</a>
					</Link>

					<Link href={'/home/men'}>
						<a
							className={
								'py-3 px-5 my-1 rounded hover:bg-black hover:text-white'
							}
						>
							Hombre
						</a>
					</Link>
				</div>

				<div
					className={
						isShown
							? 'w-36 mx-0 p-2 flex flex-col justify-center items-center'
							: 'hidden'
					}
				>
					{showCategories()}
				</div>

				<div
					className={
						subCategoriesShown
							? 'w-min ml-5 p-2 bg-white flex flex-col rounded'
							: 'hidden'
					}
				>
					{showSubcategories()}
				</div>
			</div>
		</>
	)
}

export default SideNav
