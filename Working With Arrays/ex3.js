// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge = ages =>
{
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adultHumanAges = humanAges.filter(age => age >= 18);
    const averageHumanAge = adultHumanAges.reduce((acc, age) => acc + age, 0) / adultHumanAges.length;
  
    return averageHumanAge;
}

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));