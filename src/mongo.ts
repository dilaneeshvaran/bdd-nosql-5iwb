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

await client.close();
