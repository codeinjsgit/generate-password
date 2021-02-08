const generatePassword = (length) => {
    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!#$%&()*+/<=>?@[\]^_{|}~";
    const charset = `${alphabets}${numbers}${specialCharacters}`;
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}
console.log(generatePassword(10));  // V4|j2>!USZ
