import mongoose from "mongoose";

const loanrequestSchema = new mongoose.Schema({
    fname : {type: String, required: true},
    lname : {type: String, required: true},
    country : {type: String, required: true},
    postal_Code : {type: String, required: true},
    address : {type: String, required: true},
    lisence_front : {type: String, required: true},
    lisence_back : {type: String, required: true},
    loan_size : {type: String, required: true},
    long_term : {type: String, required: true},
    user_signed : {type: String, required: true},
    //2nd part
    email : {type: String, required: true},
    bank_name : {type: String, required: true},
    account_number : {type: String, required: true , unique : true},
    iban_code : {type: String, required: true},
    swift_code : {type: String, required: true},
    branch_Number : {type: String, required: true},
    Transit_Number : {type: String, required: true},
    confirm : {type : Boolean , required : true}
});

const loanrequest = mongoose.model('loanrequest' , loanrequestSchema);

export default loanrequest;