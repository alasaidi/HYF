// Let us access the first character in 'JavaScript' string.

// let string = "JavaScript";
// let firstLetter = string[0];
// console.log(firstLetter); // J
// let secondLetter = string[1]; // a
// let thirdLetter = string[2];
// let lastLetter = string[9];
// console.log(lastLetter); // t
// let lastIndex = string.length - 1;
// console.log(lastIndex); // 9
// console.log(string[lastIndex]); // t

let x = 2;
let y = 3;
// just checking the term of number consiereng the type of the two of them
if (x === y) {
  console.log("they are equial ");
} else {
  console.log("they are not equil");
}

let a = 2;
let b = 3;
// here he DGAF the point that they have the same variable doesnt mater the type
if (a == b) {
  console.log("they are equial ");
} else {
  console.log("they are not equil");
}

// declaratipn de fonction normal fonction
function calcule(a, b) {
  a += b;
  alert(a);
  return a;
}
calcule(a, b);
console.log(calcule(a, b));

// declaratipn de fonction normal flechee
const calcul = (a, b) => {
  a += b;
  console.log(a);
};
calcul(a, b);

// Switch Examples now
let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
}

// Switch Examples now
let dayUserInput = prompt("What day is today ?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("It is not a week day.");
}
