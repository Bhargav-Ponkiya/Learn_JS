// NOTE: fetch() does not "think" of 404 as an actual error. Meaning it won't trigger catch block

const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = `<p class="error">There was an Error</p>`;
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;

      return `<a class="single-product" href="product.html?id=${id}&name=john&age=23">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join("");

  productsDOM.innerHTML = ` <div class="products-container">${productList}</div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
