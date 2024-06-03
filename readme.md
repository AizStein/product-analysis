# Product Sales Analysis

You are given an array of sales records.

Your task is to use the `reduce` method to generate a summary object that provides the total revenue and the total quantity sold for each product.

## Input

An array of sales records:

```javascript
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
```

Output should be An object where each key is a product name and the value is an object containing:

- totalQuantity: The total quantity sold for that product.
- totalRevenue: The total revenue generated from that product

expected Output:

```
{
 Laptop: { totalQuantity: 3, totalRevenue: 3600 },
 Mouse: { totalQuantity: 12, totalRevenue: 300 },
 Keyboard: { totalQuantity: 6, totalRevenue: 450 },
 Monitor: { totalQuantity: 5, totalRevenue: 1500 }
}
```