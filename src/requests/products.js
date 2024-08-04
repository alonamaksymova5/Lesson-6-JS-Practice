import apiInstance from '../services/api'



export async function getProduct() {
    const result = await apiInstance.get("/products")
    return result.data
}





