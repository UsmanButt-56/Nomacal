import mongoose from "mongoose";

const TermSchema = new mongoose.Schema({
    id : { type : Number, required : true },
    label : { type : String, required : true },
    value : { type : String, required : true },
    time : { type : String, required : true },
    amount : { type : String, required : true },
    limit : { type : String, required : true }
});

const Terms = mongoose.model("Terms", TermSchema);

export default Terms;