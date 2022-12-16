import db from "./connection.js"

// til at finde alle brugerne 
const allUsers = await db.users.find().toArray(); 

// Udskriver alle brugere i konsollen 
console.log(allUsers);