import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        reuqired:[true,"Name Required!"],
        minLength:[3,"Name must contain at least 3 characters!"],
    },
    email:{
        type:String,
        reuqired:[true,"Email Required!"],
        validate:[validator.isEmail,"please provied valid email!"],
    },
    subject:{
        type:String,
        reuqired:[true,"subject Required!"],
        minLength:[5,"subject must contain at least 5 characters!"],
    },
    message:{
        type:String,
        reuqired:[true,"Message Required!"],
        minLength:[10,"Message must contain at least 10 characters!"],
    },
});

export const Message = mongoose.model("message",messageSchema);