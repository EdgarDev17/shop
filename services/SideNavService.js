import commerce from '../lib/commerce'

export const getCategoriesList = () => {
    return commerce.categories
    .list()
    .then((res) => {
            // console.log('getCategoriesList()');
            // console.log(res.data);
			return res.data
		})
		.catch((err) => console.log(err))
}


export function getCategoriesByParent(slug) {
    return commerce.categories.retrieve(slug, {type: 'slug'})
    .then(res => console.log(res))
}