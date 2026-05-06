import mongoose from 'mongoose';

const borrowSchema = new mongoose.Schema({
    title : { type : String , required : true , unique : true },
    description : { type : String , required : true , unique : true }
},
{
    timestamps : true
});

const Borrow = mongoose.models.Borrow || mongoose.model("Borrow" , borrowSchema);

export default Borrow;