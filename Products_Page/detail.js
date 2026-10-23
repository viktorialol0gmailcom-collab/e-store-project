document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.querySelector('.main__section__products');
  const btnPrev = document.getElementById('left__vector');
  const btnNext = document.getElementById('right__vector');
  const btn1 = document.getElementById('btn-1');
  const btn2 = document.getElementById('btn-2');
  const btn3 = document.getElementById('btn-3');
  const btn12 = document.getElementById('btn-12');
  const dots = document.getElementById('point__vector');
  let currentPage = 1;
  const itemsPerPage = 8; 
  function renderCatalog(page) {
    if (!productsContainer) return;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);

    productsContainer.innerHTML = paginatedProducts.map(product => `
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
  function updatePaginationUI() {
    [btn1, btn2, btn3, btn12].forEach(btn => btn && btn.classList.remove('active'));
    if (currentPage <= 3) {
      btn1.innerText = '1';
      btn2.innerText = '2';
      btn3.innerText = '3';
      if (dots) dots.style.display = 'inline';
      
    } 
    else if (currentPage > 3 && currentPage < 12) {
      btn1.innerText = currentPage - 1; 
      btn2.innerText = currentPage; 
      btn3.innerText = currentPage + 1;
      if (dots) dots.style.display = 'inline'; 
      
      btn2.classList.add('active');
    } 
    else if (currentPage === 12) {
      btn1.innerText = '9';
      btn2.innerText = '10';
      btn3.innerText = '11';
      if (dots) dots.style.display = 'none';
      
      btn12.classList.add('active');
    }
    if (btnPrev) btnPrev.style.opacity = currentPage === 1 ? '0.4' : '1';
    if (btnNext) btnNext.style.opacity = currentPage === 12 ? '0.4' : '1';
  }

  function updateUI() {
    renderCatalog(currentPage);
    updatePaginationUI();
  }
  if (btn1) btn1.addEventListener('click', () => { currentPage = parseInt(btn1.innerText); updateUI(); });
  if (btn2) btn2.addEventListener('click', () => { currentPage = parseInt(btn2.innerText); updateUI(); });
  if (btn3) btn3.addEventListener('click', () => { currentPage = parseInt(btn3.innerText); updateUI(); });
  if (btn12) btn12.addEventListener('click', () => { currentPage = 12; updateUI(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { if (currentPage > 1) { currentPage--; updateUI(); } });
  if (btnNext) btnNext.addEventListener('click', () => { if (currentPage < 12) { currentPage++; updateUI(); } });
  updateUI();
});
