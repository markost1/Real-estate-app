import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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
    if(!validUser){
        res.status(404).json('Korisnik nije pronadjen')
    }

    const validPassword = bcrypt.compareSync(password,validUser.password)
    if(!validPassword){
        res.status(404).json('Lozinka nije ispravna')
    }

    const {password:pass, ...rest} = validUser._doc

    res.status(200).json(rest)

}