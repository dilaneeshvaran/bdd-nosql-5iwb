db.products.insertMany([
  {
    _id: "product-1",
    name: "Laptop Pro 14",
    price: 1499,
    categories: [
      { id: "computers", name: "Ordinateurs" }
    ],
    stock: { quantity: 12 },
    variants: [
      { color: "black", price: 1499, stock: 0 },
      { color: "silver", price: 1899, stock: 12 }
    ]
  },
  {
    _id: "product-3",
    name: "Souris verticale",
    price: 59,
    categories: [
      { id: "accessories", name: "Accessoires" },
      { id: "ergonomics", name: "Ergonomie" }
    ],
    stock: { quantity: 30 }
  }
]);

db.commands.insertMany([
  {
    _id: "command-1",
    customer: {
      id: "customer-1",
      name: "Alice Martin"
    },
    status: "paid",
    createdAt: new Date("2026-09-01T10:00:00Z"),
    lines: [
      {
        product: {
          id: "product-1",
          name: "Laptop Pro 14",
        },
        quantity: 1,
        unitPrice: 1499
      }
    ]
  }
]);
