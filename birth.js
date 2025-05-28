let userName = prompt("What is your name?");
    let userAge = prompt("How old are you?");
    let currentYear = new Date().getFullYear();
    let yearOfBirth = currentYear - Number(userAge)
    alert(`Hello, ${userName}! You were probably born in ${yearOfBirth}`)
    