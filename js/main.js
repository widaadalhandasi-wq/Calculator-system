//  make calculator 


function calculator() {
    var num1 = +prompt("Enter first number");
    var num2 = +prompt("Enter second number");
    var operations = prompt("Enter operation (+, -, *, /)");
    var result;
    if (operations === "+") {
        result = num1 + num2;
    }
    else if (operations === "-") {
        result = num1 - num2;
    }
    else if (operations === "*") {
        result = num1 * num2;
    }
    else if (operations === "/") {
        // Check for division by zero
        result = num1 / num2;
    }
    else {
        result = "Error: Unknown operation";
    }

    alert("Your result is: " + result);


    return result
}

var result=calculator() 
console.log("result is:" + result);

