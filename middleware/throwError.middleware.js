let throwMessage = ({name, code, message}) => {
    if(name) {
        return JSON.stringify({name: name , code: code, message: message});
    }
    return JSON.stringify({code: code, message: message});
}

const throwError = {
    throwMessage: throwMessage
};

module.exports = throwError;