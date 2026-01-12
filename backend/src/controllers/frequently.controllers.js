import Frequently from "../models/frequently.model.js";

export const getFrequently = async ( req , res) => {
    try 
    {
       const frequently = await Frequently.find();
       if(frequently.length > 0)
       {
           res.status(200).json(frequently);
       }
       else
       {
           res.status(404).json({message : "Frequently not found"});
       }
    }
    catch(error)
    {
        res.status(500).json({message : "Server Error" , error : error.message });
    }
}

export const createFrequently = async (req , res) => {
    try 
    {
        let result;

        // 🔹 CHECK if request body is an ARRAY
        if (Array.isArray(req.body)) {
            // Insert multiple FAQs at once
            result = await Frequently.insertMany(req.body);
        } else {
            // Insert single FAQ
            result = await Frequently.create(req.body);
        }

        res.status(201).json({
            message: "Frequently created successfully",
            data: result
        });

    }
    catch(error)
    {
        res.status(500).json({message : "Server Error" , error : error.messgae });
    }
}