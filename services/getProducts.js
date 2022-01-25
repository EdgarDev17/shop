import axios from "axios"

export const getProductByCategory = async () =>{
    axios.get('http://localhost:27017/api/products/')
}
