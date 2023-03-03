const chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
"w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z"];
const chars_numbers = ["0","1","2","3","4","5","6","7","8","9",];
const chars_special = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+",".",",","/","?","{","}"];

function generatePassword(choices, limit = 15) {
    let password = "";
    let choices_length = choices.length;
    for (let i = 0; i < limit; i++) {
        let index = Math.floor(Math.random() * choices_length);
        password += choices[index];
    }
    return password;
}

function whatToInclude(withSymbols = false, withNumbers = false) {
    return chars
        .concat(withNumbers ? chars_numbers: [])
        .concat(withSymbols ? chars_special: []);
}

function copyPassword(element) {
    const password = element.currentTarget.textContent;
    if (password.length > 0) {
        navigator.clipboard.writeText(password);
        window.alert("Password copied!:  " + password);
    }
}

const passwordOne = document.getElementById("btn-password-one");
const passwordTwo = document.getElementById("btn-password-two");

passwordOne.addEventListener("click", (e) => {
    copyPassword(e);
});

passwordTwo.addEventListener("click", (e) => {
    copyPassword(e);
});

document.getElementById("btn-generate").addEventListener("click", () => {
    passwordOne.textContent = generatePassword(whatToInclude());
    passwordTwo.textContent = generatePassword(whatToInclude(true, true));

});
