function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(num1, num2, op) {
	let result;

	switch (op) {
		case "+":
			result = add(num1, num2);
		case "-":
			result = subtract(num1, num2);
		case "*":
			result = multiply(num1, num2);
		case "/":
			result = divide(num1, num2);
	}

	return result;
}
