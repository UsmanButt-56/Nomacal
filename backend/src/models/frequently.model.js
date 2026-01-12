import mongoose from "mongoose";

const FrequentlySchema = new mongoose.Schema({
    question : { type : String , required : true },
    answer : { type : String , required : true}
});

const Frequently = mongoose.model("Frequently" , FrequentlySchema);

export default Frequently;