import Terms from "../models/terms.model.js";

export const getTerms = async (req , res) => 
{
    try 
    {
        const terms = await Terms.find();  
        if(terms.length > 0)
        {
            res.status(200).json(terms);
        }
        else
        {
            res.status(404).json({message : "No terms data found"});
        }  
    }
    catch(error)
    {
        res.status(500).json({ message : "Server error" , error : error.message });
    }
}

export const createTerms = async (req , res) => 
{
    try
    {
        const terms = new Terms(req.body);
        await terms.save();
        res.status(201).json({ message : "Terms created successfully" });
    }
    catch(error)
    {
        res.status(500).json({message : "Server error" , error : error.message });
    }
}