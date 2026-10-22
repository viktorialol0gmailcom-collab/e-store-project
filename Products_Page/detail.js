document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.querySelector('.main__section__products');

  if (productsContainer) {
    productsContainer.innerHTML = products.map(product => `
      <div class="product-card" data-id="${product.id}">
        <a href="./details_page.html?id=${product.id}" class="product-link-wrapper">
          <h4><img src="./img/Favorites.svg" alt="В избранное"></h4>
          <img src="${product.image}" alt="${product.name}" class="product-img-custom">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button type="button">Buy Now</button>
        </a>
      </div>
    `).join('');
  }
});