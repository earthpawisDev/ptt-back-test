const SettingModel = require('../models/setting.model');

exports.createSettings = async () => {
    try {
        const newSetting = new SettingModel();
        const savedSetting = await newSetting.save();
        return savedSetting;
    } catch (error) {
        throw new Error(`Error creating settings: ${error.message}`);
    }
};

exports.getSettings = async () => {
    return await SettingModel.findOne();
};
