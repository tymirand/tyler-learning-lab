/*
Task:
Create an object of store products and their prices.
Create an array of items representing a shopping cart.
Create a function that returns the shopping cart total.

Bonus:
Use nested tuples in the cart array to store the quantity of each product. Factor this in when calculating the cart total.
Update the store products object to include the quantity of each item in the store’s inventory. This number should be updated based on the quantity of items in the cart.
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

// shopping car to store user selection; format for each entry: [item, quantity]
let shoppingCart = [
  ["banana", 5],
  ["peach", 12],
  ["pear", 20],
  ["peach", 10],
];

let total = 0;

console.log("~~~~~~~~~~~~~~");
console.log("Shopping Cart [item,quantity] >> ", shoppingCart);
console.log("~~~~~~~~~~~~~~");

//iterate through shopping cart
for (let ii = 0; ii < shoppingCart.length; ii++) {
  item = shoppingCart[ii][0];
  cartQuantity = shoppingCart[ii][1];
  productCount = products[item][1];

  //logic for cart and products storage quantity
  if (productCount === 0) {
    console.log(item, "out of stock.");
    delete products.item;
    continue;
  } else if (cartQuantity >= productCount) {
    console.log("- Only", productCount, item, "available. Can't buy ", cartQuantity);
    cartQuantity = productCount;
    products[item][1] = 0;
  } else {
    products[item][1] -= cartQuantity;
  }

  //calculate and persist total
  unitPrice = products[item][0];
  curTotal = unitPrice * cartQuantity;
  total += curTotal;

  console.log(cartQuantity, item, "@ $", unitPrice, "-> $", curTotal);
}

console.log("=======");

console.log("Final Total :: $", total);
