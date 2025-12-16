export const checkValidateData = (email, password, Name) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    const isNameValid = /^[a-zA-Z\s]{2,}$/.test(Name)

    if (!isEmailValid) return "Email is not valid"
    if (!isPasswordValid) return "Password is not valid"
    if (!isNameValid) return "Name is not valid"

    return null
}