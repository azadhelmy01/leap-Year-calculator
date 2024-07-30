document.getElementById("strBox").addEventListener("keyup", string);
// added an eventlistener so when a key is interacted within the textbox,
// an event will take place
let outputStr = document.getElementById("outputStr");// just defining the ouput here 

function string() {
    // Basically what i understood from w3 schools is that if i set a condition for the 
    // event key to take place when a SPECIFIC KEY the user interacts with, 
    // then everytime that key is interacted with, a
    // function will be called
    if (event.key == "Enter") {
        str = document.getElementById("strBox").value; // im just getting the string in the text box

        strLen = Number(str.length); // This gives me the length of the string WITHIN the textbox

        //the if statements below: I have take the variable strLen (above) which does (see above) 
        //strLen is a number, so i see if that number is divisble by 2 with 0 as a remainder using
        // the modolus operator

        if (strLen % 2 == 0) {
            outputStr.textContent = "The length of " + str + " is " + strLen + " and it is even";
        }
        else {
            outputStr.textContent = "The length of " + str + " is " + strLen + " and it is odd";
        }

    }


};






let numBox1 = document.getElementById("firstNum");
let numBox2 = document.getElementById("secondNum");
document.getElementById("numBtn").addEventListener("click", compare);
let outputNum = document.getElementById("outputNum");

function compare() {
    num1 = Number(numBox1.value);
    num2 = Number(numBox2.value);
    if (isNaN(num1) || isNaN(num2)) {
        outputNum.textContent = "PLEASE ENTER VALID NUMBERS"
    }
    else {

        if ((num1 % num2 == 0) && (num1 != num2) && (num1 != 0)) {
            outputNum.textContent = "The first is divisble by the second";

        }
        else if ((num2 % num1 == 0) && (num1 != num2) && (num2 != 0)) {
            outputNum.textContent = "The second is divisible by first";
        }

        else if ((num1 == num2) && (num1 != 0) && (num2 != 0)) {
            outputNum.textContent = "They are each divisble by each other.";
        }

        else if ((num2 == 0) || (num1 == 0)) {
            outputNum.textContent = "You entered a zero.";
        }
        else {
            outputNum.textContent = "They are not divisble."
        }

    }
};

let dateBox = document.getElementById("dateBox")
let leapYr = document.getElementById("leapOut")

dateBox.addEventListener("keyup", dateConverter) 
// dateBox is the box we enter the year, so by adding a keyup event we end up calling a function when the user interacts with
// the date box.
// below is the function of the date box


function dateConverter(year) {
    year = dateBox.value // reads the value in the text box, 

    if ((event.key == "Enter") && (year >= 1582)) 
        // so when we hit enter (defined by event key) AND it is a number, the if statements 
        // take what is in the dateBox and compares it to the conditions of the if statements
        {
        if (
            ((year % 4 == 0) && (year % 100 != 0) && (year % 400 != 0) || (year % 4 == 0) && (year % 100 == 0) && (year % 400 == 0))
        
        ) { leapYr.textContent = year + " is a leap year" }

        else { leapYr.textContent = year + " is not a leap year" }
    }
    else if (event.key == "Enter") { leapYr.textContent = year + " is invalid." }

}   
 // basically what I'm saying, the condition is: when year is 

            //(divisible by 4 (only) AND NOT divisible by 100 and 400 then leap year)
            // OR
            //(divisble by 4 AND divisble BY 100 AND divisble by 400 then leap year)
            // isnt this basically AB'C' + ABC
            //  A(B'C' + BC)
            //  (year % 4 == 0) &&        (  (year % 100 != 0) && (year % 400 != 0)   ) || ( ((year % 100 != 0) && (year % 400 != 0 ) )