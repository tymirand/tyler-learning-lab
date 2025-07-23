const storeItems = [
  { name: "Rambutan", price: 0.99 },
  { name: "Lychee", price: 0.5 },
  { name: "Dragon Fruit", price: 3.5 },
  { name: "Bread", price: 2.5 },
  { name: "Instant Coffee", price: 4.99 },
  { name: "Eggs", price: 10.99 },
];

const storeItemsDiv = document.getElementById("store-items");
const cartList = document.getElementById("cart");
const cartTotalSpan = document.getElementById("cart-total");

let runningTotal = 0;

//Handle adding and rendering items to list of items bought. Creating a new list item each time.
function addItemToCart(event) {
  const itemName = event.target.textContent.split(" -> $")[0];

  const newCartItem = document.createElement("li");
  const itemTextNode = document.createTextNode(itemName);
  newCartItem.appendChild(itemTextNode);
  cartList.appendChild(newCartItem);

  const itemPriceString = event.target.textContent.split(" -> $")[1];
  const itemPrice = parseFloat(itemPriceString);

  runningTotal += itemPrice;

  cartTotalSpan.innerHTML = runningTotal.toFixed(2);
}

//iterate through storeItems list to display.
//for every item, we create a new clickable button that triggers a function on click.
for (let i = 0; i < storeItems.length; i++) {
  const item = storeItems[i];
  const itemButton = document.createElement("button");
  const buttonText = document.createTextNode(
    `${item.name} -> $${item.price.toFixed(2)}`
  );

  itemButton.appendChild(buttonText);

  itemButton.addEventListener("click", (event) => {
    addItemToCart(event);
  });

  storeItemsDiv.appendChild(itemButton);
}
