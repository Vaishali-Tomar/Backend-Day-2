const greetUser = (userName) => {
    console.log(`hello, ${userName}`);
}

const greetWithSalutation = (salutation, userName) => {
    console.log(`hello ${salutation} ${userName}`);
}

module.exports = {
    greetUser, 
    greetWithSalutation,
}