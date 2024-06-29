const { validate } = require('../middleware/index.js');
const UserService = require('../service/user.service.js');

exports.registerUser = async (req,res,next) => {
    try{
        const payloadRegisterUser = {
            firstName : validate.check(req.body.firstName),
            lastName : validate.check(req.body.lastName),
            phone : validate.check(req.body.phone)
        };
        const checkDuplicate = await UserService.checkDuplicateUser(payloadRegisterUser.phone);
        if(checkDuplicate){
            return res.status(200).json({status:400 , message:'Phone number already registered.'});
        };
        await UserService.registerUser(payloadRegisterUser);
        return res.status(200).json({status:201 , message:'registered user successfully.'});
    }catch(err){
        next(err);
    }
};

exports.getUserTable = async (req,res,next) => {
    try{
        const results = await UserService.getUserTable();
        return res.status(200).json({status:200 , results : results});
    }catch(err){
        next(err);
    }
};

exports.getInfoRegisterUser = async (req,res,next) => {
    try{

    }catch(err){
        next(err);
    }
};


