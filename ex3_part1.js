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