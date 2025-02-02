export function createProductsMarkup(products) {
  return products
    .map(
      ({ title, description, price }) =>
        `<li><h1>${title}</h1><p>${description}</p>
            <p>${price}</p></li>`
    )
    .join('');
}

export function createProductsMarkupId({ title, description, price }) {
  return `<li><h1>${title}</h1><p>${description}</p>
            <p>${price}</p></li>`;
}
