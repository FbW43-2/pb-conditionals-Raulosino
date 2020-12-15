
// Validates a number between 50 and 99
function DigitValidation(number1) {
    if ((50 <= number1 && number1 >= 99))
        return true;
    else
        return false;
}



//Step 1 ----------------------------------------------------------------------------------------------------------------------------------
// Validates two numbers using the DigitValidation function
function TwoDigitValidation(num1, num2) {
    if (DigitValidation(num1) || DigitValidation(num2))
        console.log("True");
    else
        console.log("False")
}



//Step 2 ----------------------------------------------------------------------------------------------------------------------------------
// Validates three numbers using the DigitValidation function
function ThreeDigitValidation(num1, num2, num3) {
    if (DigitValidation(num1) || DigitValidation(num2) || DigitValidation(num3))
        console.log("True");
    else
        console.log("False")
}

console.log("Step 1")
TwoDigitValidation(10, 99);
console.log('\nStep 2')
ThreeDigitValidation(1, 55, 10);



// Step 3  ----------------------------------------------------------------------------------------------------------------------------------
var a = 1;
var b = 2;
var c = 3;

//Puts 3 variables inside of an array and prints the max value;
function HighestValue() {
    var array = [a, b, c];
    console.log(`The highest value is ${Math.max(...array)}`)
}
//First evaluation of the variables
console.log('\nStep 3');
HighestValue();

//Changing the values of the variables
a = 100;
b = 200;
c = 0;

//Second evaluation of the variables.
HighestValue();


// Step 4 ----------------------------------------------------------------------------------------------------------------------------------
var originalString = "Raul";
var PyString = "Py" + originalString;

function StringCheck(string) {
    if ((string[0] == "P") && (string[1] == "y"))
        console.log(string.substr(2));
    else
        console.log();
}

console.log('\nStep 4');
StringCheck(PyString);


// Step 5 ----------------------------------------------------------------------------------------------------------------------------------
function AddingNumbers(num1, num2) {
    return num1 + num2;
}

function StepFiveAddition(num1, num2) {
    var num = AddingNumbers(num1, num2);
    if (num >= 50 && num <= 80)
        console.log(65);
    else
        console.log(80);
}

console.log("\nStep 5")
StepFiveAddition(50, 3);


// Step 6 ----------------------------------------------------------------------------------------------------------------------------------
//Calculates the difference between two numbers, Difference is always positive!
function NumbersDifference(num1, num2) {
    var num = num1 - num2;
    if (num < 0) {
        num = num * -1;
    }
    else {
        return num;
    }
    return num;
}

//Validates of the addition or difference of two numbers is equal to 8. 
function StepSix(num1, num2) {
    var addition = AddingNumbers(num1, num2);
    var difference = NumbersDifference(num1, num2);
    if (addition === 8 || difference === 8)
        console.log("True")
    else
        console.log("False")
}


console.log("\nStep 6")
StepSix(2, 6);


// Step 7 ----------------------------------------------------------------------------------------------------------------------------------
function StepSeven(num1, num2) {
    var num = AddingNumbers(num1, num2);
    if ((num1 === 15 || num2 === 15) || num === 15) {
        console.log("True");
    }
    else {
        console.log("False");
    }
}

console.log("\nStep7");
StepSeven(15, 10);


// Step 8 ----------------------------------------------------------------------------------------------------------------------------------
function Step8(num1, num2) {
    if ((num1 % 7 === 0 || num2 % 7 === 0) || ((num1 % 11 === 0 || num2 % 11 === 0)))
        console.log("True")
    else
        console.log("False")
}

console.log("\nStep 8");
Step8(1, 11)


// Step 9 ----------------------------------------------------------------------------------------------------------------------------------
function Step9(num1, num2) {
    if (num1 != num2) {
        console.log(`Solution: ${AddingNumbers(num1, num2)}`)
    }
    else {
        console.log(`Solution: ${AddingNumbers(num1, num2) * 3}`)
    }
}

console.log("\nStep 9")
Step9(1, 2);


// Step 10 ---------------------------------------------------------------------------------------------------------------------------------

function Step10(num) {

    var difference;
    if (num < 19) {
        difference = (num - 19) * -1;
    }
    else {
        difference = (num - 19) * 2;
    }
    console.log('Difference : ' + difference);

}

console.log("\nStep 10");
Step10(18);


// Step 11 ---------------------------------------------------------------------------------------------------------------------------------

var firstName = "Raul";
var age = 26;

function AgeCheck(age) {

    if (age < 0) {
        console.log("No negative numbers allowed.")
    }
    else if (age < 13) {
        console.log(firstName + "is a child.");
    }
    else if (age >= 13 && age < 20) {
        console.log(firstName + "is a teenager.");
    }
    else if (age >= 20 && age < 30) {
        console.log(console.log(firstName + "is a young adult."));
    }
    else if (age >= 30) {
        console.log(console.log(firstName + "is an adult."));
    }

}
