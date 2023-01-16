import { Router } from "express";
// instantiere router
const router = Router();

// Importere bcrypt til at hashe users kode
import bcrypt from "bcrypt";

// servicelag der tjekker om databasen har en
import { checkIfUserExists, findUserByEmail } from "../../signup_service.js" 
// Importing template engine
import { renderPage } from "../../util/templateEngine.js";
 
// Using template engine 
const signinPage = renderPage("/signinpage/signinpage.html",
{
    tabTitle: "Nodejs Signinpage",
});

router.get("/signinpage", (req,res) => {
    res.send(signinPage); 
})


router.post("/signinpage", async (req,res) => {
    const credentials = req.body;
    console.log("Attempt to login!",credentials)
    if((await checkIfUserExists(credentials.email)) === true) { // false vil sige arrayt er tomt og derfor ingen brugere fundet, men hvis den er true vil arrayt ikke være tomt og der er derfor fundet en bruger. Det skal være false condition for at den er true og derfor kan køre koden efterfølgende eller går den ned til else.
        console.log("user exists")    
        const user = await findUserByEmail(credentials.email)
        console.log("user",user)
        if(await bcrypt.compare(credentials.password, user.password)) {
            console.log("Login successfully");
            req.session.user = user // Her er der oprettet en session med en attribut der hedder user. I user atributten er der gemt id, name, email, password. 
            //console.log(req)
            res.send({ success: true });
        } else {
            console.log("User doesn't exist!")
            res.send({ success: false });
        }

    } else {
        console.log("User doesn't exist! or incorrect email/password"); 
        res.send("User doesn't exist! or incorrect email/password"); 
    }    
})

export default router; 