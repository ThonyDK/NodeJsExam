import { Router } from "express";
const router = Router();


import { renderPage } from "../../util/templateEngine.js";
 
// Using template engine 
const signinPage = renderPage("/signinpage/signinpage.html",
{
    tabTitle: "Nodejs Signinpage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});



// Logout
router.post('/logout', async (req, res) => {
  //console.log("Session user: ", req.session.user)
    req.session.destroy()
    console.log('Destroyed session')
    if(req.session == undefined) {
      res.send({ success: true });
    } 
  });

  export default router; 