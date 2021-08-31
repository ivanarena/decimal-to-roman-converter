let decimalNumber = document.getElementById('decimal-input');
let romanNumber = document.getElementById('roman-output');

decimalNumber.oninput = displayOutput; // handle input in real time 

function displayOutput() { // modify html
    romanNumber.textContent = convertToRoman(decimalNumber.value);
}

function convertToRoman(input) { 
    let convertedNumber = ''
    while (input > 0) {
        if (input >= 1000) {
            convertedNumber += 'M';
            input -= 1000;
        } else if (input >= 900) {
            convertedNumber += 'CM';
            input -= 900;
        } else if (input >= 500) {
            convertedNumber += 'D';
            input -= 500;
        } else if (input >= 400) {
            convertedNumber += 'CD';
            input -= 400;
        } else if (input >= 100) {
            convertedNumber += 'C';
            input -= 100;
        } else if (input >= 90) {
            convertedNumber += 'XC';
            input -= 90;
        } else if (input >= 50) {
            convertedNumber += 'L';
            input -= 50;
        } else if (input >= 40) {
            convertedNumber += 'XL';
            input -= 40;
        } else if (input >= 10) {
            convertedNumber += 'X';
            input -= 10;
        } else if (input >= 9) {
            convertedNumber += 'IX';
            input -= 9;
        } else if (input >= 5) {
            convertedNumber += 'V';
            input -= 5;
        } else if (input >= 4) {
            convertedNumber += 'IV';
            input -= 4;
        } else if (input >= 1) {
            convertedNumber += 'I';
            input -= 1;
        }
    }
    return convertedNumber;
} 