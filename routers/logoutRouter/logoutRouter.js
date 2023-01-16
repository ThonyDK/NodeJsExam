import { Router } from "express";
const router = Router();
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