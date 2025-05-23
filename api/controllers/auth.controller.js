import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const signup = async(req,res) => {
    
    const{username,email,password} = req.body;

    const hashedPassword = bcrypt.hashSync(password,10);
    
    const newUser = new User({username,email,password:hashedPassword}) 

    try {
        
        await newUser.save();
        res.status(201).json("Korisnik sa admin privilegijama je uspjesno kreiran")

    } catch (error) {
        console.log(error);
        
    }

}

export const signin = async(req,res)=>{
    
    const{email,password} = req.body;

    const validUser = await User.findOne({email});
    if(!validUser || !validUser.isAdmin){
        return res.status(404).json({message:'Korisnik nije pronadjen', success:false})
    }

    const validPassword = bcrypt.compareSync(password,validUser.password)
    if(!validPassword){
       return  res.status(404).json({message:'Lozinka nije ispravna',success:false})
    }

    const {password:pass, ...rest} = validUser._doc

    const token = jwt.sign({
        id:validUser._id, isAdmin:validUser.isAdmin
    },process.env.JSON_SECRET_KEY,{
        expiresIn:'1d',
    });


    return res.status(200)
    .cookie('access_token', token, {
      httpOnly: true,
      secure: false,   // true ako koristiš HTTPS
      sameSite: 'Lax',
    })
    .json({
      success: true,
      admin: validUser.isAdmin,
      user: rest,
      token, // ← dodaj token ovde za frontend
    });
  

}

export const signout = (req,res) => {
    try {
        res.clearCookie('access_token');
        res.status(200).json('Korisnik je uspjesno odjavljen')
    } catch (error) {
        next(error)
    }
}