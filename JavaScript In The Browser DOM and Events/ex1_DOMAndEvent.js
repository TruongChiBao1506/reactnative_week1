
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
let score = 0;
function changeScore(){
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    //let secretNumber = 10;
    if(document.querySelector('.guess').value == secretNumber){
        alert('Correct Number');
        document.querySelector('body').style.backgroundColor = '#FFFFFF';
        document.querySelector('body').style.color = '#000000';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        score+=20;
        document.querySelector('.score').textContent = score;
    }
}
document.querySelector('.again').addEventListener('click', function() {
    score = 0;      
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
