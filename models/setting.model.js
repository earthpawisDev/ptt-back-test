const mongoose = require('mongoose');
const { Schema } = mongoose;

const settingSchema = new Schema({
    receive : {
        type : Number,
        required : true,
        default: 0
    },
    registered : {
        type : Number,
        required : true,
        default: 0
    }
},
{ timestamps: true, version: 0 });

const SettingModel = mongoose.model('Setting', settingSchema);

module.exports = SettingModel;
