//Function that returns Body Mass Index

var yourWeight = prompt("Please enter your weight in KGs");
var yourHeight = prompt("Please enter your height in metres");

function bmiCalculator(weight, height){
  var bmi = weight / (height * height);
  return Math.round(bmi);
}

alert ("Your Body Mass Index is " + bmiCalculator(yourWeight, yourHeight));
