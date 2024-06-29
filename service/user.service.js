const UserModel = require('../models/user.model');

exports.checkDuplicateUser = async (phone) => {
    try {
        const user = await UserModel.findOne({ phone:phone });
        return user ? true : false;
    } catch (error) {
        throw new Error('Error while checking duplicate user: ' + error.message);
    }
};

exports.registerUser = async (payload) => {
    try{
        const newUser = new UserModel(payload);
        await newUser.save();
    }catch (error) {
        throw new Error('Error while registerUser : ' + error.message);
    }
};

exports.getUserTable = async () => {
    try{
        const results = UserModel.find({active : true},'-_id firstName lastName phone createdAt');
        return results;
    }catch (error) {
        throw new Error('Error while getUserTable : ' + error.message);
    }
};
