import './styles/normalize.css';
import './styles/index.css';

import { getProduct } from './requests/products'; 
import { createProductsMarkup } from './services/markupService';

const list = document.querySelector('#allProducts');

getProduct();

async function renderAllProducts() {
    const data = await getProduct();
    const markup = createProductsMarkup(data.products);
    list.insertAdjacentHTML('beforeend', markup);
    console
}

renderAllProducts();




