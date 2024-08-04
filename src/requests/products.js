import apiInstance from '../services/api';

export async function getProduct() {
  const result = await apiInstance.get('/products');
  return result.data;
}

export async function getProductId(id) {
  const result = await apiInstance.get('/products/id');
  return result.data;
}
