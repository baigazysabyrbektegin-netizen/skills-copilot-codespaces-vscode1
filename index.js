#!/usr/bin/env node

const Calculator = require('./calculator');
const readline = require('readline');

const calculator = new Calculator();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== Simple Calculator ===');
console.log('Available operations: add, subtract, multiply, divide');
console.log('Type "exit" to quit\n');

function askQuestion() {
  rl.question('Enter operation (add/subtract/multiply/divide): ', (operation) => {
    if (operation.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      return;
    }

    rl.question('Enter first number: ', (firstInput) => {
      const a = parseFloat(firstInput);
      
      if (isNaN(a)) {
        console.log('Error: Invalid number\n');
        askQuestion();
        return;
      }

      rl.question('Enter second number: ', (secondInput) => {
        const b = parseFloat(secondInput);
        
        if (isNaN(b)) {
          console.log('Error: Invalid number\n');
          askQuestion();
          return;
        }

        try {
          let result;
          switch (operation.toLowerCase()) {
            case 'add':
              result = calculator.add(a, b);
              console.log(`Result: ${a} + ${b} = ${result}\n`);
              break;
            case 'subtract':
              result = calculator.subtract(a, b);
              console.log(`Result: ${a} - ${b} = ${result}\n`);
              break;
            case 'multiply':
              result = calculator.multiply(a, b);
              console.log(`Result: ${a} × ${b} = ${result}\n`);
              break;
            case 'divide':
              result = calculator.divide(a, b);
              console.log(`Result: ${a} ÷ ${b} = ${result}\n`);
              break;
            default:
              console.log('Error: Unknown operation. Please use add, subtract, multiply, or divide\n');
          }
        } catch (error) {
          console.log(`Error: ${error.message}\n`);
        }

        askQuestion();
      });
    });
  });
}

askQuestion();
