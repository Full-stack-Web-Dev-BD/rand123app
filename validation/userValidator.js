const validator = require('validator')
const registervalidator = (info) => {
    const errors = {}
    console.log(info)
    if (!info.firstName) {
        errors.firstName = "First Name requird"
    }   
     if (!info.lastName) {
        errors.lastName = "Last Name requird"
    }
    if (!info.email) {
        errors.email = "Email requird"
    } else if (!validator.default.isEmail(info.email)) {
        errors.email = "Email Not Valid "
    }
    if (!info.password) {
        errors.password = "Password requird"
    }
    return {
        errors: errors,
        isValid: Object.keys(errors).length === 0
    }
}




const loginValidator = (info) => {

    let errors = {}
    if (!info.email) {
        errors.email = "Email requird"
    } else if (!validator.default.isEmail(info.email)) {
        errors.email = "Email Not Valid "
    }
    if (!info.password) {
        errors.password = "Password requird"
    }
    return {
        errors: errors,
        isValid: Object.keys(errors).length === 0
    }
}

module.exports = {
    registervalidator,
    loginValidator
}