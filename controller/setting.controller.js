const SettingService = require('../service/setting.service')

exports.getSettings = async (req,res,next) => {
    try{
        const setting = await SettingService.getSettings();
        return res.status(200).json({status:200, result:setting})
    }catch(err){
        next(err);
    }
}

exports.createSettings = async (req, res, next) => {
    try{
        const createSettings = await SettingsService.createSettings();
    }catch(err){
        next(err);
    }
};