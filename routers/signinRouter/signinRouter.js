import { Router } from "express";
// instantiere router
const router = Router();
//import db from "../../database/connection.js";
import { checkIfUserExists, findUserByEmail } from "../../signup_service.js" 

import { renderPage } from "../../util/templateEngine.js";

const signinPage = renderPage("/signinpage/signinpage.html",
{
    tabTitle: "Nodejs Signinpage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

router.get("/signinpage", (req,res) => {
    res.send(signinPage); 
})


router.post("/signinpage", async (req,res) => {
    console.log("POST request called")
    if((await checkIfUserExists("test@mail.com")) === false) {
        //users.push(req.body)
        console.log("User created")
        res.redirect("/signin")
        //console.log({data: users})
    } else {
        console.log("User already exists")
        res.send("User already exists") // Denne skal udkommenteres og du skal benytte res.send(signinPage) længere nede i stedet til din frontend.  
    }
    //res.send({data: users})

    //db.users.find(user => user.email === email)

    //res.send(signinPage); 
})

export default router; 