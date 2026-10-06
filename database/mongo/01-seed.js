// for 1st 3 exercices
db.products.insertMany([
  {
    _id: "product-1",
    name: "Laptop Pro 14",
    price: 1499,
    categories: [{ id: "computers", name: "Ordinateurs" }],
    stock: { quantity: 12, reserved: 3, warehouse: "PAR" },
    variants: [
      { color: "black", price: 1499, stock: 0 },
      { color: "silver", price: 1899, stock: 12 },
    ],
  },
  {
    _id: "product-3",
    name: "Souris verticale",
    price: 59,
    categories: [
      { id: "accessories", name: "Accessoires" },
      { id: "ergonomics", name: "Ergonomie" },
    ],
    stock: { quantity: 30 },
  },
]);

db.commands.insertMany([
  {
    customer: {
      id: "customer-1",
      name: "Alice Martin",
    },
    status: "paid",
    createdAt: new Date("2026-08-28T10:00:00Z"),
    lines: [
      {
        productId: "product-1",
        categoryId: "computers",
        quantity: 1,
        unitPrice: 1499,
      },
    ],
  },

  {
    customer: {
      id: "customer-2",
      name: "Nassim Bernard",
    },
    status: "pending",
    createdAt: new Date("2026-09-02T09:00:00Z"),
    lines: [
      {
        productId: "product-2",
        categoryId: "accessories",
        quantity: 1,
        unitPrice: 129,
      },
    ],
  },

  {
    customer: {
      id: "customer-1",
      name: "Alice Martin",
    },
    status: "paid",
    createdAt: new Date("2026-09-01T10:00:00Z"),
    lines: [
      {
        productId: "product-1",
        categoryId: "computers",
        quantity: 1,
        unitPrice: 1499,
      },
      {
        productId: "product-2",
        categoryId: "accessories",
        quantity: 2,
        unitPrice: 129,
      },
    ],
  },

  {
    customer: {
      id: "customer-2",
      name: "Nassim Bernard",
    },
    status: "paid",
    createdAt: new Date("2026-09-03T14:30:00Z"),
    lines: [
      {
        productId: "product-3",
        categoryId: "accessories",
        quantity: 3,
        unitPrice: 59,
      },
    ],
  },

  {
    customer: {
      id: "customer-3",
      name: "Julie Robert",
    },
    status: "cancelled",
    createdAt: new Date("2026-09-05T08:00:00Z"),
    lines: [
      {
        productId: "product-2",
        categoryId: "accessories",
        quantity: 1,
        unitPrice: 129,
      },
      {
        productId: "product-3",
        categoryId: "ergonomics",
        quantity: 1,
        unitPrice: 59,
      },
    ],
  },

  {
    customer: {
      id: "customer-3",
      name: "Julie Robert",
    },
    status: "paid",
    createdAt: new Date("2026-09-06T16:20:00Z"),
    lines: [
      {
        productId: "product-1",
        categoryId: "computers",
        quantity: 2,
        unitPrice: 1499,
      },
      {
        productId: "product-2",
        categoryId: "accessories",
        quantity: 1,
        unitPrice: 129,
      },
      {
        productId: "product-3",
        categoryId: "ergonomics",
        quantity: 4,
        unitPrice: 59,
      },
    ],
  },

  {
    customer: {
      id: "customer-1",
      name: "Alice Martin",
    },
    status: "paid",
    createdAt: new Date("2026-09-10T11:45:00Z"),
    lines: [
      {
        productId: "product-2",
        categoryId: "accessories",
        quantity: 5,
        unitPrice: 129,
      },
    ],
  },
]);
