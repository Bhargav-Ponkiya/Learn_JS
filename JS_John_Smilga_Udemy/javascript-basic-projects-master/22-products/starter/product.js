const url = "https://course-api.com/javascript-store-single-product";

const productDOM = document.querySelector(".product");

const fetchProduct = async () => {
  productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;

  try {
    // console.log(window.location.search);

    const param = new URLSearchParams(window.location.search);
    const id = param.get("id");

    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">There was a problem loading the product</P>`;
  }
};

const displayProduct = (product) => {
  const {
    colors,
    company,
    description,
    image,
    name: title,
    price,
  } = product.fields;
  const { url: img } = image[0];

  // set page title
  document.title = title.toUpperCase();

  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");

  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${price / 100}</span>
          <div class="colors">
            ${colorsList}
          </div>
          <p>
            ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
