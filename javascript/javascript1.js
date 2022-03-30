console.log("Basic Math functions using javascript");
var num1 = 20;
var num2 = 10;
var sum;
var _name = "My fevorate";
var name1 = "IronMan";

sum = num1 + num2;

console.log(" Addition of two number is " + sum);
console.log(_name + name1);


//Addition function
function Addition(number1, number2) { 
    var additionOfNumbers = number1 + number2;
    console.log(additionOfNumbers);
}

Addition(55, 12); // Function call

//Subtraction Function
function subtraction(number1,number2){
    var subtractionOfNumbers = number1 - number2;
    console.log(subtractionOfNumbers);
}

subtraction(10,5);
subtraction(400,5000);

//multiplication function
function multiplication(number1,number2){
    var multiplicationOfNumbers = number1 * number2;
    console.log(multiplicationOfNumbers);
}

multiplication(222,256);
multiplication(202,25);

//division function
function division(number1,number2){
    var divisionOfNumbers = number1 / number2;
    console.log(divisionOfNumbers);
}

division(22,2);
division(200,10);