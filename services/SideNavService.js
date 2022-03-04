import commerce from '../lib/commerce'

export const getCategoriesList = () => {
    return commerce.categories
        .list()
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err))
}

