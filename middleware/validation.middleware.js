let checkNull = (value) => {
    const errText = { name:"BadRequestError", code: 400, message: "Please fill out the information completely." }
    if (value === "null" || value === "" || value === null || value === undefined) {
        throw new Error(JSON.stringify(errText));
    }
    return value;
}

const checkData = {
    check: checkNull
};

module.exports = checkData;