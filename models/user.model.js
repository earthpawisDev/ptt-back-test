const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    phone : {
        type: String,
        required : true
    },
    active : {
        type : Boolean,
        default : true,
        required : true
    }
},
{ timestamps: true, version: 0 });

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
