import { Router } from "express";
import session from "express-session";
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

const frontPage = renderPage("/frontpage/frontpage.html",
{
    tabTitle: "Nodejs frontpage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

// Get myprofilepage
router.get("/myprofilepage", (req,res) => {
    console.log("Session user: ", req.session.user)
    
    // Authorization lavet nedenfor hvor man kun kan komme ind i my profile page hvis man er logged in 
    if(req.session.user == undefined) { // hvis session objektet er tomt så send mig til frontpage
        res.send(frontPage)
    } else { // Hvis session objektet ikke er tomt så send mig til my profile page
        res.send(myProfilePage); 
    }
})

// 
router.get("/myprofiledata", (req,res) => {
    console.log("Session user: ", req.session.user)
    const userData = req.session.user;
    console.log(userData)
    res.send(userData)
})

export default router; 