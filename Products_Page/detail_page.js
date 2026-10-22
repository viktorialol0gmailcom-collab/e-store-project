
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const currentProduct = products.find(item => item.id === productId);
  if (currentProduct) {
    const pdName = document.getElementById('pd-name');
    if (pdName) pdName.innerText = currentProduct.name;
    const breadcrumb = document.getElementById('iphone__14');
    if (breadcrumb) breadcrumb.innerText = currentProduct.name;
    const pdPrice = document.getElementById('pd-price');
    if (pdPrice) pdPrice.innerText = `$${currentProduct.price}`;
    const pdOldPrice = document.getElementById('pd-old-price');
    if (pdOldPrice) pdOldPrice.innerText = `$${currentProduct.oldPrice}`;
    const pdImage = document.getElementById('pd-image');
    if (pdImage) {
      pdImage.src = currentProduct.image;
      pdImage.alt = currentProduct.name;
    }
  } else {
    const mainSection = document.querySelector('.main__section');
    if (mainSection) {
      mainSection.innerHTML = `
          <h2>Product not found</h2>
          `
    }
  }
});