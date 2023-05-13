/**
 * @function checkIsEmpty
 * @desc Checks if a given value is empty or not.
 * @param {string} enter - The value to be checked for emptiness.
 * @returns {boolean} - Returns true if the value is empty, false otherwise.
 */
export function checkIsEmpty(enter) {
  return enter === '';
}

/**
 * @function function invalidNumber
 * @desc Determines if a given number is invalid, i.e., not a number.
 * @param {number} number - The number to be checked.
 * @returns {boolean} - Returns true if the given number is invalid, false otherwise.
 */
export function invalidNumber(number) {
  if (checkIsEmpty(number)) return false;
  return Number.isNaN(number);
}

/**
 * @function function add
 * @desc Adds two numbers and returns the result.
 * @param {number|string} n1 - The first number to be added.
 * @param {number|string} n2 - The second number to be added.
 * @returns {number} - The sum of the two numbers.
 */
export function add(n1, n2) {
  return parseInt(n1, 10) + parseInt(n2, 10);
}

/**
 * @desc Performs a mathematical operation on two numbers using the specified operator.
 * @param {number|string} n1 - The first number.
 * @param {number|string} n2 - The second number.
 * @param {string} operator - The operator to be used for the mathematical operation.
 * @returns {number|string} - The result of the mathematical operation, or an error message if there was an issue with the input.
 */
export function operation(n1, n2, operator) {
  if (n1 === '' || n2 === '') return false;
  const num1 = parseInt(n1, 10);
  const num2 = parseInt(n2, 10);
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
  return false;
}

/**
 * @desc Finds either the maximum or minimum number from an array of numbers.
 * @param {number[]} number - The array of numbers.
 * @param {string} [type="max"] - The type of operation to perform: "max" to find the maximum number or "min" to find the minimum number.
 * @returns {string} - This  export function  max or min number depend on type default it will return max.
 */
export function maxNumber(numbers, type) {
  let callerType = 'max';
  if (type === 'min') {
    callerType = 'min';
  }
  let num = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (callerType === 'min' && num > numbers[i]) {
      num = numbers[i];
    }
    if (callerType === 'max' && num < numbers[i]) {
      num = numbers[i];
    }
  }
  return num;
}

/**
 * @desc Calculates the square of a given number.
 * @param {number} n - The number to be squared.
 * @returns {number} The calculated square of the number.
 */
export function square(n) {
  return n * n;
}

/**
 * @desc Calculates the area of a circle based on its radius.
 * @param {number} radius - The radius of the circle.
 * @returns {number} The calculated area of the circle.
 */
export function areaOfCircle(radius) {
  const area = 3.14 * square(radius);
  return area;
}

/**
 * @desc Calculates the simple interest based on the principle, rate, and time.
 * @param {number} principle - The principle amount of the loan.
 * @param {number} rate - The interest rate of the loan.
 * @param {number} time - The time period of the loan.
 * @returns {number|string} The calculated simple interest of the loan if the rate is provided, otherwise it returns an error message as a string.
 */
export function simpleinterest(principle, rate, time) {
  if (rate === '') return 'Please provide me rate';
  const si = principle * rate * time;
  const into = si / 100;
  return into;
}

/**
 * @desc Prints counting from 1 to a given number n.
 * @param {number|string} n - The number up to which counting needs to be printed.
 * @returns {string} The text representation of the counting from 1 to the given number, separated by "<br/>" tags,
 * if a valid number is provided. Otherwise, it returns an error message as a string.
 */
export function printCounting(n) {
  if (n === '') return 'Please provide valid number';
  if (typeof n === 'string') return 'Please give me valid number';
  let text = '';
  for (let i = 1; i <= n; i += 1) {
    text += `${i}<br/>`;
  }
  return text;
}

/**
 * @desc Generates a random OTP (One Time Password) of a given length.
 * @param {string} lengthOfOtp - The desired length of the OTP.
 * @returns {number|string} The generated OTP if a valid length is provided. Otherwise, it returns an error message as a string.
 */
export function generateOTP(lengthOfOtp) {
  if (checkIsEmpty(lengthOfOtp)) return 'Please provide length of otp';
  const pad = '1';
  const afterPad = pad.padEnd(parseInt(lengthOfOtp, 10) + 1, '0');
  const hhis = Math.floor(Math.random() * afterPad);
  return hhis;
}

/**
 * @desc Checks whether a given value is a number or not.
 * @param {number|string} string - The value to be checked.
 * @returns {string} "true" if the value is a number, "false" if the value is a string.
 */
export function checkNumber(string) {
  return typeof string === 'number' || typeof string === 'string';
}

/**
 * @desc Checks if a given number is positive, negative or zero.
 * @param {number|string} numbr - The number to be checked.
 * @returns {string} A message indicating whether the given number is positive, negative or zero.
 * If the input is empty or invalid, an error message is returned instead.
 */
export function checkPveNve(numbr) {
  if (checkIsEmpty(numbr)) return 'Empty';
  if (invalidNumber(numbr)) return 'please enter a valid number';

  if (numbr < 0) {
    return 'the number is negative';
  }
  if (numbr > 0) {
    return 'the number is positive';
  }
  if (numbr === 0) {
    return 'zero';
  }
  return false;
}

/**
 * @desc Checks if a given number is divisible by 7.
 * @param {number|string} diiv - The number to be checked for divisibility by 7.
 * @returns {string} The result of the divisibility check as a string, either "this number is divisible by 7" or "this number is not divisible by 7".
 */
export function isDivisibleby7(number) {
  if (checkIsEmpty(number) || invalidNumber(number)) return false;
  return number % 7 === 0;
}

/**
 * @desc Sums up the digits of a given number.
 * @param {number} digit - The number whose digits need to be summed up.
 * @returns {number} The calculated sum of the digits of the given number.
 */
export function addDigit(digit) {
  let sum = 0;
  let finalDigit = digit;
  while (finalDigit !== 0) {
    sum += finalDigit % 10;
    finalDigit = Math.floor(finalDigit / 10);
  }
  return sum;
}

/**
 * @desc Calculates the sum of squares of the digits of a given number.
 * @param {number} digit - The number whose digits' squares need to be summed.
 * @returns {number} The calculated sum of squares of the digits of the given number.
 */
export function squareOf(digit) {
  let sum = 0;
  let finalDigit = digit;
  while (finalDigit !== 0) {
    sum += square(finalDigit % 10);
    finalDigit = Math.floor(finalDigit / 10);
  }
  return sum;
}

/**
 * @description Reverses a given string.
 * @param {string} entVal - The string to be reversed.
 * @returns {string} The reversed version of the given string.
 */
export function reverse(entVal) {
  return entVal.split('').reverse().join('');
}

/**
 * @desc Calculates the exponent of a given number.
 * @param {number} baseNumber - The base number.
 * @param {number} exponentNumber - The exponent number.
 * @returns {number} The calculated exponent of the base number.
 */
export function exponents(baseNumber, exponentNumber) {
  let exp = 1;
  for (let i = 1; i <= exponentNumber; i += 1) {
    exp = baseNumber * exponentNumber;
  }
  return exp;
}

/**
 * @desc Determines if a given number is a prime number or not.
 * @param {number} pNumber - The number to be checked.
 * @returns {boolean} True if the number is a prime number, false otherwise.
 */
export function primeNumber(pNumber) {
  if (pNumber === 0 || pNumber === 1) return false;
  for (let i = 2; i < pNumber; i += 1) {
    if (pNumber % i === 0) return false;
  }
  return true;
}

/**
 * @desc Checks if a given year is a leap year or not.
 * @param {number} year - The year to be checked.
 * @returns {boolean} True if the year is a leap year, False otherwise.
 */
export function checkLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0;
}

/**
 * @desc Checks whether an email is valid or not based on a regular expression.
 * @param {string} email - The email address to be validated.
 * @returns {boolean} Returns true if the email is valid and false
 */
export function checkEmail(email) {
  if (checkIsEmpty(email)) return false;
  const validation = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9]+\.)([a-z]+)(\.[a-z]+)$/;
  return !!email.match(validation);
}

/**
 * @desc Checks if a given URL is valid or not.
 * @param {string} enterurl - The URL to be validated.
 * @returns {boolean} true is valid else false
 */
export function checkUrl(enterurl) {
  if (checkIsEmpty(enterurl)) return false;
  const validurl = /^(https:\/\/)[a-zA-Z0-9$-]+(.?[a-z])$/;
  return !!enterurl.match(validurl);
}
/**
 * @desc Checks if a given zip code is valid or not.
 * @param {string} zip - The zip code to be validated.
 * @returns {string} A message indicating if the zip code is valid or not.
 */
export function checkZipcode(zip) {
  if (invalidNumber(zip)) return false;
  const zipcode = /^([0-9]{6})$/;
  return !!zip.match(zipcode);
}

/**
 * @desc Checks if a given phone number is valid or not.
 * @param {string} numBer - The phone number to be validated.
 * @returns {boolean} True if the phone number is valid, False otherwise.
 */
export function phoneNumber(numBer) {
  if (checkIsEmpty(numBer)) return false;
  const test = /^(\+91[0-9]{10})$/;
  return !!numBer.match(test);
}

/**
 * @desc Checks if a given name is valid or not.
 * @param {string} name - The name to be validated.
 * @returns {boolean} True if the name is valid, False otherwise.
 */
export function checkName(name) {
  if (checkIsEmpty(name)) return false;
  const infoName = /^[a-zA-Z]+$/;
  return !!name.match(infoName);
}
