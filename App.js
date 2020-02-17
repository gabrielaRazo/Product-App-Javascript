class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}
class UI {
  addProduct() {}
  deleteProduct() {}
  showMessage() {}
}
//DOM Events
document.getElementById("product-form").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;
  const product = new Product(name, price, year);
  e.preventDefault();
});
