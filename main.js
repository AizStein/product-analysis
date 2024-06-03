const sales = [
  { product: "Laptop", quantity: 2, price: 1200 },
  { product: "Mouse", quantity: 10, price: 25 },
  { product: "Keyboard", quantity: 5, price: 75 },
  { product: "Monitor", quantity: 3, price: 300 },
  { product: "Laptop", quantity: 1, price: 1200 },
  { product: "Mouse", quantity: 2, price: 25 },
  { product: "Keyboard", quantity: 1, price: 75 },
  { product: "Monitor", quantity: 2, price: 300 },
];

/* Your task is to use the `reduce` method to generate a summary object that 
  provides the total revenue and the total quantity sold for each product. */

const summary = sales.reduce((acc, item) => {
  if (!acc[item.product]) {
    acc[item.product] = { totalQuantity: 0, totalRevenue: 0 };
  }
  acc[item.product].totalQuantity += item.quantity;
  acc[item.product].totalRevenue += item.quantity * item.price;
  return acc;
}, {});

console.log(summary);
