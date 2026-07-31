function validateInput(input) {

  if (input === null || input.trim() === '') {
    return false;
  }
  
  const num = Number(input);

  return !isNaN(num) && Number.isInteger(num) && num > 0;
}

function findPrimes(limit) {
  const primes = [];

  nextPrime:
  for (let i = 2; i <= limit; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        continue nextPrime; 
      }
    }
    primes.push(i); 
  }

  return primes;
}

function displayPrimes(primes, limit) {
  const resultDiv = document.getElementById('result');
  
  if (primes.length === 0) {
    resultDiv.innerHTML = `<p>For n = ${limit}, there are no prime numbers.</p>`;
  } else {
    resultDiv.innerHTML = `
      <p>For n = ${limit} prime numbers are:</p>
      <p>${primes.join(', ')}</p>
    `;
  }
}

let userInput;

while (true) {
  userInput = prompt("Enter a positive integer:");
  if (validateInput(userInput)) {
    break;
  }
}

const limit = parseInt(userInput, 10);
const primes = findPrimes(limit);

displayPrimes(primes, limit);
