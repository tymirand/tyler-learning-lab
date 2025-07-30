const { calculateCartTotal, isItemInStock } = require("./shoppingcart.js");

// ~~~ Test 1: Shopping cart total calculation ~~~
test("Calculates correct total for shopping cart", () => {
  // [price, quantity in stock]
  const testItems = {
    apple: [2, 10],
    banana: [1, 5],
  };

  // [item name, quantity to buy]
  const testCart = [
    ["apple", 3],
    ["banana", 2],
  ];

  const total = calculateCartTotal(testCart, testItems);

  // Check if we got the expected result
  // (3 apples @ $2) + (2 bananas @ $1) = $6 + $2 = $8
  expect(total).toBe(8);
});

// ~~~ Test 2: Check Stock of an Item ~~~
test("correctly identifies if items are in stock", () => {
  // [number to buy, stock]
  const testItems = {
    orange: [3, 15], // orange has 15 in stock
    grape: [5, 0], // grape has 0 (out of stock)
  };

  expect(isItemInStock("orange", testItems)).toBe(true); // Should be in stock
  expect(isItemInStock("grape", testItems)).toBe(false); // Should be out of stock
});
