import jwt from 'jsonwebtoken';

export const verifyToken = (req,res)=>{
    const token = req.cookies.access_token;

    if(!token){
        console.log('ne postoji token');
        
    }

    jwt.verify(token,process.env.JSON_SECRET_KEY,(err,user)=>{
        if(err){
            console.log('Neautorizovan');
            
        }

        req.user = user
        next();
    })

}