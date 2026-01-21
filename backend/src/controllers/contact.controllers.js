import mongoose from 'mongoose';
import Contact from '../models/contact.model.js';
export const createContact = async(req , res) =>
{
    try
    {
        const { number , email , fname , lname , emails , country , message } = req.body;
        const newContact = new Contact({ number, email, fname, lname, emails, country, message });
        await newContact.save();
        res.status(201).json({message : "Contact created successfully" , newContact});
    }
    catch(error)
    {
        res.status(500).json({message : "Server Error" , error});
    }
}