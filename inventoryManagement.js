// Write your code here
// Initialize the products array
let products = ["Laptop", "Smartphone", "Tablet"];
//log the first product
function logFirstProduct() {
  console.log(products[0]);
}
//add a new product to the end of the array
function addProduct(product) {
  products.push(product);
}
//update the name of the second product
function updateProductName(newName) {
  if (products.length >= 2) {
    products[1] = newName;
  }
}
//remove the last product from the array
function removeLastProduct() {
  products.pop();
}
// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
