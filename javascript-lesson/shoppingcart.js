/*
Task:
Create an object of store products and their prices.
Create an array of items representing a shopping cart.
Create a function that returns the shopping cart total.

Bonus:
Use nested tuples in the cart array to store the quantity of each product. Factor this in when calculating the cart total.
Update the store products object to include the quantity of each item in the store's inventory. This number should be updated based on the quantity of items in the cart.
If a store product runs out, remove it from the object and print that the item is out of stock.
*/

// products object: data format is item : [price, quantity]
const products = {
  banana: [6, 25],
  orange: [24, 10],
  melon: [28, 100],
  peach: [6, 10],
  pear: [4, 25],
  mango: [4, 38],
};

// Function to calculate shopping cart total
function calculateCartTotal(cart, productsData) {
  let total = 0;
  
  for (let ii = 0; ii < cart.length; ii++) {
    const item = cart[ii][0];
    let cartQuantity = cart[ii][1];
    const productCount = productsData[item][1];

    // Logic for cart and products storage quantity
    if (productCount === 0) {
      console.log(item, "out of stock.");
      delete productsData[item];
      continue;
    } else if (cartQuantity >= productCount) {
      console.log("- Only", productCount, item, "available. Can't buy ", cartQuantity);
      cartQuantity = productCount;
      productsData[item][1] = 0;
    } else {
      productsData[item][1] -= cartQuantity;
    }

    // Calculate and add to total
    const unitPrice = productsData[item][0];
    const curTotal = unitPrice * cartQuantity;
    total += curTotal;

    console.log(cartQuantity, item, "@ $", unitPrice, "-> $", curTotal);
  }
  
  return total;
}

// Function to check if an item is in stock
function isItemInStock(item, productsData) {
  return productsData[item] ? productsData[item][1] > 0 : false;
}

// shopping cart to store user selection; format for each entry: [item, quantity]
let shoppingCart = [
  ["banana", 5],
  ["peach", 12],
  ["pear", 20],
  ["peach", 10],
];

// Run the original script logic
console.log("~~~~~~~~~~~~~~");
console.log("Shopping Cart [item,quantity] >> ", shoppingCart);
console.log("~~~~~~~~~~~~~~");

// Make a copy of products for the calculation so we don't modify the original
let productsCopy = JSON.parse(JSON.stringify(products));
let total = calculateCartTotal(shoppingCart, productsCopy);

console.log("=======");
console.log("Final Total :: $", total);

// Export functions for testing
module.exports = {
  calculateCartTotal,
  isItemInStock,
  products
};
