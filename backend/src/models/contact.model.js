import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    number : { type: String, required: true },
    email : { type: String, required: true },
    fname : { type: String, required: true },
    lname : { type: String, required: true },
    emails : { type: String, required: true },
    country : { type: String, required: true },
    message : { type: String, required: true },
})

const Contact = mongoose.model("Contact" , contactSchema);

export default Contact;