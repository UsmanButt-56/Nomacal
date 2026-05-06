import mongoose from 'mongoose';

const frequentlySchema = new mongoose.Schema({
    question : { type : String , required : true },
    answer : { type : String , required : true }
},
{
    timestamps : true
});

const Frequently = mongoose.models.Frequently || mongoose.model('Frequently' , frequentlySchema);

export default Frequently;