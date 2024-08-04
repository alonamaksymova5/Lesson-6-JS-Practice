import './styles/normalize.css';
import './styles/index.css';

import { getProduct } from './requests/products';
import { createProductsMarkup } from './services/markupService';
import { createProductsMarkupId } from './services/markupService';

const list = document.querySelector('#allProducts');

getProduct();

async function renderAllProducts() {
  const data = await getProduct();
  const markup = createProductsMarkup(data.products);
  list.insertAdjacentHTML('beforeend', markup);
}

// renderAllProducts();

const form = document.querySelector('#singleProductForm');
form.addEventListener('submit', onSubmit);
async function onSubmit(event) {
  const idForm = event.target.elements.id.value;
  console.log(idForm);
}
