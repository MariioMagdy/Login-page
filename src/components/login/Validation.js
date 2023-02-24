const Validation = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = "Email is required";
    } // email is must contains @
    else if (!/\S+@\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 5) {
        errors.password = "Password is not correct";
    }
    return errors;
};

export default Validation;
