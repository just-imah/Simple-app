let text = document.getElementById("error-message");
let product = document.getElementById("add-product");
let price = document.getElementById("add-price");
let input = document.forms["myform"]["product"];
let data = document.getElementById("error-messages");
let items = [];

document.getElementById("error-message").style.display = "none";

text.style.display = "none";
data.style.display = "none";
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

// form validation
function validateForm() {
  // console.log(product.value);
  text.style.display = !product.value ? "block" : "none";
  data.style.display = !price.value ? "block" : "none";

  items.push(product.value, price.value);
  console.log(items);
  // if (!product.value) {
  //   text.style.display = "block";
  // } else {
  //   text.style.display = "none";
  // }
}
