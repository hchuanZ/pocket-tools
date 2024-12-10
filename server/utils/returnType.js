const formatApiReturn = (data = {}, errorMsg = '', errCode = 20000) => {
    return {
        status: 200,
        errCode,
        errorMsg,
        data
    }
}

const errCode = {
    SUCCESS: 20000,
    NOT_FIND: 40001,
    SERVER_ERR: 50001,
}
module.exports = {
    formatApiReturn,
    errCode
}