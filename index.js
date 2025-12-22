const sendProductsData = async () => {
  const data = await fetch("./data.json");
  const response = await data.json();
  return response;
};

const showProducts = async () => {
  const productData = await sendProductsData();
  document.getElementById("productContainer").innerHTML = productData
    .map((element) => {
      const { name, image, price} = element;
      return `
      <div class="col-6 col-md-3 ">
      <div class="card shadow h-100">
      <img src="${image}" alt="">
      <div class="p-3 text-center text-">
     <p> ${name}</p>
      <p>₱${price}</p>
      </div>
      </div>
      </div>`;
    })
    .join("");
};

showProducts();
