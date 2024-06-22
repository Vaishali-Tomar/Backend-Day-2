const greetUser = (userName) => {
    console.loh(`hello, ${userName}`);
}

const greetWithSalutation = (salutation, userName) => {
    console.log(`hello ${salutation} ${userName}`);
}

module.exports = {
    greetUser, 
    greetWithSalutation,
}