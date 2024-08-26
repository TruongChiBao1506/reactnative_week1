
// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅


const textarea = document.createElement('textarea');
textarea.value = "underscore_case \n first_name \n Some_Variable \n calculate_AGE \n delayed_departure";
textarea.setAttribute('rows', 8);
textarea.setAttribute('cols', 30);
document.body.append(textarea);

const button = document.createElement('button');
button.textContent = 'Convert to camelCase';
document.body.append(button);

function convertToCamelCase() {
    const text = textarea.value;
    const words = text.split('\n');
    let emoji_count = 1;
    for (let word of words) {
        const parts = word.trim().split('_');
        const camelCase = [parts[0].toLowerCase()];

        for (let i = 1; i < parts.length; i++) {
            camelCase.push(parts[i][0].toUpperCase() + parts[i].slice(1).toLowerCase());
        }

        console.log(camelCase.join('') + ' ' + '✅'.repeat(emoji_count++));
    }
}
button.addEventListener('click', convertToCamelCase);