// This code calculaes %age of 5 subjects:
// Subjects: Micro-Biology, Bio-Chemistry , Botany , English , Urdu :

// Student.s details:
let StudenId ="5544TXVB";

// Total arks:
let totalMarks= 500;

// obtained marks:
let microBiologyScore = 90;
let bioChemistryScore = 80;
let botanyScore = 85;
let englishScore = 80;
let urduScore = 75;

// Final Result:

let finalReult = ((microBiologyScore + bioChemistryScore + botanyScore + englishScore +urduScore) / totalMarks) *100; 

let resultStatement = "Student: " + StudenId + "  Obtained Percentage: " + finalReult + "%"

//  Printing result:
console.log(resultStatement);
