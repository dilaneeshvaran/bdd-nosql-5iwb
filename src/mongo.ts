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

await client.close();
