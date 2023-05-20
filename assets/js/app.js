


let categories = ['Category 1', 'Category 2', 'Category 3'];
let selectedCategory = null;
let selectedProduct = null;
let isPurchased = false;

function handleCategoryClick(category) {
  selectedCategory = category;
  selectedProduct = null;
  isPurchased = false;
  renderCategories();
  renderProductList();
  renderProductDetails();
}

function handleProductClick(product) {
  selectedProduct = product;
  isPurchased = false;
  renderProductDetails();
}

function handleBuyClick() {
  isPurchased = true;
  renderNotification();
}

function handleBackToCategories() {
  selectedCategory = null;
  selectedProduct = null;
  isPurchased = false;
  renderCategories();
  renderProductList();
  renderProductDetails();
  renderNotification();
}

function renderCategories() {
  let categoriesHtml = categories.map(function (category) {
    let isActive = selectedCategory === category ? 'active' : '';
    return `<li class="${isActive}" onclick="handleCategoryClick('${category}')">${category}</li>`;
  }).join('');
  document.querySelector('.categories ul').innerHTML = categoriesHtml;
}

function renderProductList() {
  if (selectedCategory) {
    
        let products = ['Product 1', 'Product 2', 'Product 3'];
        let productListHtml = products.map(function (product) {
      return `<li onclick="handleProductClick('${product}')">${product}</li>`;
    }).join('');
    document.getElementById('productList').innerHTML = productListHtml;
  } else {
    document.getElementById('productList').innerHTML = '';
  }
}

function renderProductDetails() {
  if (selectedProduct) {
    document.getElementById('productDetails').innerHTML = selectedProduct;
  } else {
    document.getElementById('productDetails').innerHTML = '';
  }
}

function renderNotification() {
  if (isPurchased) {
    document.getElementById('notification').style.display = 'block';
  } else {
    document.getElementById('notification').style.display = 'none';
  }
}

renderCategories();
renderProductList();
renderProductDetails();
renderNotification();
