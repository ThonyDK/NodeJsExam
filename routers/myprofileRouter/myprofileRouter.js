import { Router } from "express";
// instantiere router
const router = Router();

import webshopDB from "../../database/connection.js"

import { checkIfUserExists, findUserByEmail } from "../../signup_service.js" 

import { renderPage } from "../../util/templateEngine.js";

const myProfilePage = renderPage("/myprofilepage/myprofilepage.html",
{
    tabTitle: "Nodejs myprofilepage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

// Get myprofilepage
router.get("/myprofilepage", (req,res) => {
    res.send(myProfilePage); 
})

// Delete profile
router.delete("/myprofilepage", async (req,res) => {
    console.log("POST request called")
    if((await checkIfUserExists("td@mail.com")) === true) {
        webshopDB.users.deleteOne({ email: "td@mail.com" })
        console.log("User deleted")
        res.redirect("/signup")
        //console.log({data: users})
    } else {
        console.log("User cannot be deleted")
        res.send("User cannot be deleted") // Denne skal udkommenteres og du skal benytte res.send(signinPage) længere nede i stedet til din frontend.  
    }
    //res.send({data: users})

    //db.users.find(user => user.email === email)

    //res.send(signinPage); 
})

export default router; 