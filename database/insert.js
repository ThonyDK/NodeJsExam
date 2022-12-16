import db from "./connection.js";

const insertUser = db.users.insertOne({ name: "test", email: "test@mail.com", password: 1234 });
console.log(insertUser); 