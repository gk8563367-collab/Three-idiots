
const products = [
  {name:"Fresh Chicken", price:220, image:"https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600"},
  {name:"Fresh Mutton", price:850, image:"https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600"},
  {name:"Fresh Fish", price:300, image:"https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=600"},
  {name:"Fresh Prawns", price:450, image:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600"},
  {name:"Fresh Vegetables", price:100, image:"https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600"}
];

let cart = [];

const list = document.getElementById("product-list");

products.forEach((product, index) => {
  list.innerHTML += `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${index})">ADD TO CART</button>
    </div>`;
});

function addToCart(index) {
  cart.push(products[index]);
  showCart();
}

function showCart() {
  const area = document.getElementById("cart-items");
  area.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    area.innerHTML += `
      <p>${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})">Remove</button></p>`;
  });

  if (cart.length === 0) area.innerText = "Your cart is empty.";
  document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  showCart();
}

function checkout() {
  if (!cart.length) {
    alert("Please add products first!");
    return;
  }

  let message = "Hello Three Idiots! My order:%0A";
  let total = 0;

  cart.forEach(item => {
    message += `${item.name} - Rs.${item.price}%0A`;
    total += item.price;
  });

  message += `Total: Rs.${total}%0A`;
  message += "Payment: Cash on Delivery";

  window.open(
    "https://wa.me/918489342044?text=" + message,
    "_blank"
  );
}
