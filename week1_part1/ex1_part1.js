// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
var Mark_mass;
var Mark_height;
var John_mass;
var John_height;
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
function BMI(mass,height){
    return mass / height ** 2;
}
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
var markHigherBMI;

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
var Mark_mass = 78;
var Mark_height = 1.69;
var John_mass = 92;
var John_height = 1.95;
var Mark_BMI = BMI(Mark_mass, Mark_height);
var John_BMI = BMI(John_mass, John_height);
document.getElementById("ex1_p1_data1").innerHTML = Mark_BMI > John_BMI;
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
var Mark_mass = 95;
var Mark_height = 1.88;
var John_mass = 85;
var John_height = 1.76;
var Mark_BMI = BMI(Mark_mass, Mark_height);
var John_BMI = BMI(John_mass, John_height);
document.getElementById("ex1_p1_data2").innerHTML = Mark_BMI > John_BMI; 


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
var Mark_mass = 78;
var Mark_height = 1.69;
var John_mass = 92;
var John_height = 1.95;
var Mark_BMI = BMI(Mark_mass, Mark_height);
var John_BMI = BMI(John_mass, John_height);
if(Mark_BMI > John_BMI)
    document.getElementById("ex2_p1_data1").innerHTML = "Mark\'s("+Math.round(Mark_BMI*10)/10+")"+" BMI is higher than John\'s("+Math.round(John_BMI*10)/10+")";
else
    document.getElementById("ex2_p1_data1").innerHTML = "John\'s("+Math.round(John_BMI*10)/10+")"+" BMI is higher than Mark\'s("+Math.round(Mark_BMI*10)/10+")";

// data2
var Mark_mass = 95;
var Mark_height = 1.88;
var John_mass = 85;
var John_height = 1.76;
var Mark_BMI = BMI(Mark_mass, Mark_height);
var John_BMI = BMI(John_mass, John_height);
if(Mark_BMI > John_BMI)
    document.getElementById("ex2_p1_data2").innerHTML = "Mark\'s("+Math.round(Mark_BMI*10)/10+")"+" BMI is higher than John\'s("+Math.round(John_BMI*10)/10+")";
else
    document.getElementById("ex2_p1_data2").innerHTML = "John\'s("+Math.round(John_BMI*10)/10+")"+" BMI is higher than Mark\'s("+Math.round(Mark_BMI*10)/10+")";

    // Coding Challenge #3
    // There are two gymnastics teams, Dolphins and Koalas. They compete against each
    // other 3 times. The winner with the highest average score wins a trophy!

    // Your tasks:
    // 1. Calculate the average score for each team, using the test data below
    // average()
    // 2. Compare the team's average scores to determine the winner of the competition,
    // and print it to the console. Don't forget that there can be a draw, so test for that
    // as well (draw means they have the same average score)
    // 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
    // team only wins if it has a higher score than the other team, and the same time a
    // score of at least 100 points. Hint: Use a logical operator to test for minimum
    // score, as well as multiple else-if blocks �
    // 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
    // both teams have the same score and both have a score greater or equal 100
    // points. Otherwise, no team wins the trophy
//     Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
    // data1:
// Dolphins_data1 = [96,108,89];
// Koalas_data1 = [88,91,110];
// Dolphins_databonus1 = [97,112,101];
// Koalas_databonus1 = [109,95,123];
// Dolphins_databonus2 = [97,112,101];
// Koalas_databonus2 = [109,95,106];

function calculateAverage(scores) {
    let total = 0;
    for (let score of scores) {
      total += score;
    }
    return total / scores.length;
  }
  
  function determineWinner(dolphinsScores, koalasScores, minScore = 0) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);
  
    if (dolphinsAverage > koalasAverage   
   && dolphinsAverage >= minScore) {
      return "Dolphins";
    } else if (koalasAverage > dolphinsAverage && koalasAverage >= minScore) {
      return "Koalas";
    } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= minScore && koalasAverage >= minScore) {
      return "Draw";
    } else {
      return "No winner";
    }
  }
  
  // Test data 1
  const dolphinsScores1 = [96, 108, 89];
  const koalasScores1 = [88, 91, 110];
  const winner1 = determineWinner(dolphinsScores1, koalasScores1);
  console.log("Test data 1:");
  console.log("Dolphins average:", calculateAverage(dolphinsScores1));
  console.log("Koalas average:", calculateAverage(koalasScores1));
  console.log("Winner:", winner1);
  
  // Test data for Bonus 1
  const dolphinsScoresBonus1 = [97, 112, 101];
  const koalasScoresBonus1 = [109, 95, 123];
  const winnerBonus1 = determineWinner(dolphinsScoresBonus1, koalasScoresBonus1, 100);
  console.log("\nTest data for Bonus 1:");
  console.log("Dolphins average:", calculateAverage(dolphinsScoresBonus1));
  console.log("Koalas average:", calculateAverage(koalasScoresBonus1));
  console.log("Winner:", winnerBonus1);
  
  // Test data for Bonus 2
  const dolphinsScoresBonus2 = [97, 112, 101];
  const koalasScoresBonus2 = [109, 95, 106];
  const winnerBonus2 = determineWinner(dolphinsScoresBonus2, koalasScoresBonus2, 100);
  console.log("\nTest data for Bonus 2:");
  console.log("Dolphins average:", calculateAverage(dolphinsScoresBonus2));
  console.log("Koalas average:", calculateAverage(koalasScoresBonus2));
  console.log("Winner:", winnerBonus2);