import jwt from 'jsonwebtoken';

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;

    if(!token){
        return res.status(401).json({message:'Token nije pronadjen'})
        
    }
try {
    const decoded =  jwt.verify(token,process.env.JSON_SECRET_KEY)
    if(!decoded.isAdmin){
        return res.status(403).json({message:"Forbiden"})
    }
        req.user = decoded
        next();
} catch (error) {
    return res.status(403).json({message:'Neispravan token'})
}    

}