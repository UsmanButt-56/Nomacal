import mongoose from "mongoose";
import loanrequest from "../models/loanrequest.model.js";
import cloudinary from "../config/cloudinary.config.js";

export const createloan = async (req , res) => {
    try
    {
        const { fname , lname , country , postal_Code , address , loan_size , long_term ,
            email , bank_name , account_number , iban_code , swift_code , branch_Number , Transit_Number , confirm } = req.body;  

            // ❗ Upload license front image
    const frontUpload = await cloudinary.uploader.upload(
      `data:${req.files.lisence_front[0].mimetype};base64,${req.files.lisence_front[0].buffer.toString("base64")}`,
      { folder: "loan-licenses" }
    );

    // ❗ Upload license back image
    const backUpload = await cloudinary.uploader.upload(
      `data:${req.files.lisence_back[0].mimetype};base64,${req.files.lisence_back[0].buffer.toString("base64")}`,
      { folder: "loan-licenses" }
    );

    // ❗ Upload user signed document
    const signedUpload = await cloudinary.uploader.upload(
      `data:${req.files.user_signed[0].mimetype};base64,${req.files.user_signed[0].buffer.toString("base64")}`,
      { folder: "loan-licenses" }
    );

        const newLoanrequest = new loanrequest({ fname , lname , country , postal_Code , address , lisence_front : frontUpload.secure_url, lisence_back:backUpload.secure_url, loan_size , long_term , user_signed : signedUpload.secure_url,
            email , bank_name , account_number , iban_code , swift_code , branch_Number , Transit_Number , confirm });
        await newLoanrequest.save();
        res.status(201).json({success : true , newLoanrequest});
        console.log("Loan Request Created Successfully");
    }
    catch(error)
    {
        res.status(500).json({message : "Server Error" , error});
    }
}