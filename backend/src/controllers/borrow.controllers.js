import Borrow from '../models/borrow.model.js';

export const getBorrow = async (req, res) => {
    try {
        const borrows = await Borrow.find();
        if (borrows.length > 0) {
            res.status(200).json(borrows);
            console.log("Borrow data retrieved successfully");
        }
        else {
            res.status(404).json({ message: "No borrow data found" });
            console.log("No borrow data found");
        }
    }
    catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export const createBorrow = async (req , res) => {
    try {
      const {title , description} = req.body;
      const newBorrow = new Borrow({ title , description});
      await newBorrow.save();
      res.status(201).json(newBorrow);
    }
    catch(error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}