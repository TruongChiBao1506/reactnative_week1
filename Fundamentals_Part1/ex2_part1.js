// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
function BMI(mass,height){
    return mass / height ** 2;
}
var Mark_mass = 78;
var Mark_height = 1.69;
var John_mass = 92;
var John_height = 1.95;
var Mark_BMI = BMI(Mark_mass, Mark_height);
var John_BMI = BMI(John_mass, John_height);
if(Mark_BMI > John_BMI)
    console.log("Mark\'s("+Math.round(Mark_BMI*10)/10+")"+" BMI is higher than John\'s("+Math.round(John_BMI*10)/10+")");
else
    console.log("John\'s("+Math.round(John_BMI*10)/10+")"+" BMI is higher than Mark\'s("+Math.round(Mark_BMI*10)/10+")");

// data2
var Mark_mass = 95;
var Mark_height = 1.88;
var John_mass = 85;
var John_height = 1.76;
var Mark_BMI = BMI(Mark_mass, Mark_height);
var John_BMI = BMI(John_mass, John_height);
if(Mark_BMI > John_BMI)
    console.log( "Mark\'s("+Math.round(Mark_BMI*10)/10+")"+" BMI is higher than John\'s("+Math.round(John_BMI*10)/10+")");
else
    console.log( "John\'s("+Math.round(John_BMI*10)/10+")"+" BMI is higher than Mark\'s("+Math.round(Mark_BMI*10)/10+")");