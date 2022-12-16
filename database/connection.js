import { MongoClient } from "mongodb"

// 27017
const url = "mongodb://127.0.0.1:27017"

// Dette er en wrapper
const client = new MongoClient(url); 

// forbinder til db
await client.connect(); 
// Navngiver database
const webshopDB = client.db("webshop");
// Navngiver tables
export default {
    users: webshopDB.collection("users"),
    products: webshopDB.collection("products")
} 
