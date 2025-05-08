import express from "express";
import { verifyToken } from "../utils/VerifyUser.js";

const router = express.Router()



// Ruta za verifikaciju tokena
router.get('/verify', verifyToken, (req, res) => {
    // Ako je token validan i korisnik je admin, vraćamo status 200 sa potvrdom
    return res.status(200).json({ isAdmin: req.user.isAdmin });
  });

router.get('/admin/dashboard',verifyToken,(req,res)=>{
    return res.status(200).json({success:true, message:"Dobrodosli na admin dashboard"})
})

export default router;