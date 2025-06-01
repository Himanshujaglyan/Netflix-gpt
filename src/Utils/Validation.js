export const checkValidation = (email, password) => {
    const isemailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const ispasswordvalid = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/.test(password);

    if (!isemailvalid) return "Email is not valid";
    if (!ispasswordvalid) return "Password should be like: abc12345";
    return null;
};
