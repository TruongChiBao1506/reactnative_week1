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
console.log(Mark_BMI > John_BMI);
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
var Mark_mass = 95;
var Mark_height = 1.88;
var John_mass = 85;
var John_height = 1.76;
var Mark_BMI = BMI(Mark_mass, Mark_height);
var John_BMI = BMI(John_mass, John_height);
console.log(Mark_BMI > John_BMI); 
