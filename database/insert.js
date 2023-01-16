import db from "./connection.js";

import bcrypt from "bcrypt";
// de to hashmetoder er de samme
/*
bcrypt.hash("1234",12).then(response => {
    const hashPassword = response
    db.users.insertOne({ name: "test", email: "test@mail.com", password: hashPassword });
console.log(insertUser); })*/


// de to hashmetoder er de samme
const result = await bcrypt.hash("1234",12)
db.users.insertOne({ name: "test", email: "test@mail.com", password: result }); 


db.products.insertOne({ product_name: "Blade 98", price: $533 });