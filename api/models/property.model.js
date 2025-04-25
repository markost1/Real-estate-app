import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
    {
        description:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        regularPrice:{
            type:[Number,String]
        },
        bathrooms:{
            type:Number,
        },
        bedrooms:{
            type:[String,Number],
            required:true,
        },
        area:{
            type:Number,
            required:true,
        },
        balcony:{
            type:Number,
        },
        floor:{
            type:Number,
        },
        furnished:{
            type:Boolean,
        },
        seaView:{
            type:Boolean,
        },
        parkingPlot:{
            type:Boolean,
        },
        publicParking:{
            type:Boolean,
        },
        airCondition:{
            type:Boolean,
        },
        premiumProperties:{
            type:Boolean,
        },
        available:{
            type:Boolean,
        },
        pets:{
            type:Boolean,
        },
        imageURLs:{
            type:Array,
            required:true,
        }

    },{timestamps:true}
)

const Property = mongoose.model('Property',propertySchema);

export default Property;