import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
    title : { type : String , required : true , unique : true},
    description : { type : String , required : true , unique : true}
});

const Borrow = mongoose.model("Borrow" , borrowSchema);

export default Borrow;