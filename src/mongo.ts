import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL!);

await client.connect();

// ex 1 : rechercher dans un document
const products = await client
  .db("marketplace")
  .collection("products")
  .find({
    "categories.id": "accessories",
    "stock.quantity": { $gte: 20 },
  })
  .toArray();

console.log(products);

// ex 2 : attention aux tableaux
const productsWithVariants = await client
  .db("marketplace")
  .collection("products")
  .find({
    variants: {
      $elemMatch: {
        price: { $lt: 1600 },
        stock: { $gt: 0 },
      },
    },
  })
  .toArray();

console.log(productsWithVariants);

// ex 3 : modifier un document imbrique
const collection = client
  .db("marketplace")
  .collection<{ _id: string }>("products");

await collection.updateOne(
  { _id: "product-1" },
  { $set: { "stock.quantity": 8 } },
);

console.log(await collection.findOne({ _id: "product-1" }));

// ex : créer et utiliser un index
await collection.createIndex({ "categories.id": 1 });

const productsByCategory = await collection
  .find({ "categories.id": "accessories" })
  .toArray();

console.log(productsByCategory);

const explain = await collection
  .find({ "categories.id": "accessories" })
  .explain("executionStats");

console.dir(explain, { depth: null });

// ex 1 : filtrer et projeter
const paidCommands = await client
  .db("marketplace")
  .collection("commands")
  .aggregate([
    {
      $match: {
        status: "paid",
        createdAt: { $gte: new Date("2026-09-01T00:00:00Z") },
      },
    },
    {
      $project: {
        _id: 0,
        commandId: { $toString: "$_id" },
        customerId: "$customer.id",
        linesCount: { $size: "$lines" },
      },
    },
  ])
  .toArray();

console.log(paidCommands);

// ex 2 : chiffre d'affaires par catégorie
const revenueByCategory = await client
  .db("marketplace")
  .collection("commands")
  .aggregate([
    { $match: { status: "paid" } },
    { $unwind: "$lines" },
    {
      $group: {
        _id: "$lines.categoryId",
        revenue: {
          $sum: { $multiply: ["$lines.quantity", "$lines.unitPrice"] },
        },
      },
    },
  ])
  .toArray();

console.log(revenueByCategory);

// ex 3 : top produits vendus
const topProducts = await client
  .db("marketplace")
  .collection("commands")
  .aggregate([
    { $match: { status: "paid" } },
    { $unwind: "$lines" },
    {
      $group: {
        _id: "$lines.productId",
        totalQuantity: { $sum: "$lines.quantity" },
      },
    },
    { $sort: { totalQuantity: -1 } },
    { $limit: 5 },
  ])
  .toArray();

console.log(topProducts);

await client.close();
