import Property from "../models/property.model.js"

export const createProperties = async (req,res) => {
    //console.log(req.body);
    
    //res.status(201).json("podaci primljeni")

    try {
        const property = await Property.create(req.body);

        res.status(201).json(property);

    } catch (error) {
        console.log(error);
        
    }
   
}