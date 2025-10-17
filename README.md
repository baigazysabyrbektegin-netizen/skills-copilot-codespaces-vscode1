# skills-copilot-codespaces-vscode1

A simple calculator application with basic arithmetic operations.

## Features

- **Addition**: Add two numbers
- **Subtraction**: Subtract two numbers
- **Multiplication**: Multiply two numbers
- **Division**: Divide two numbers (with zero division protection)

## Installation

No external dependencies required! This calculator uses only Node.js built-in modules.

## Usage

### Interactive Mode

Run the calculator in interactive mode:

```bash
npm start
```

or

```bash
node index.js
```

Follow the prompts to:
1. Choose an operation (add, subtract, multiply, divide)
2. Enter the first number
3. Enter the second number
4. View the result
5. Type "exit" to quit

### Using the Calculator Module

You can also use the calculator programmatically in your own code:

```javascript
const Calculator = require('./calculator');

const calc = new Calculator();

console.log(calc.add(5, 3));        // 8
console.log(calc.subtract(10, 4));  // 6
console.log(calc.multiply(3, 7));   // 21
console.log(calc.divide(15, 3));    // 5
```

## Running Tests

To verify that the calculator works correctly, run the test suite:

```bash
npm test
```

## Example Session

```
=== Simple Calculator ===
Available operations: add, subtract, multiply, divide
Type "exit" to quit

Enter operation (add/subtract/multiply/divide): add
Enter first number: 5
Enter second number: 3
Result: 5 + 3 = 8

Enter operation (add/subtract/multiply/divide): multiply
Enter first number: 4
Enter second number: 6
Result: 4 × 6 = 24

Enter operation (add/subtract/multiply/divide): exit
Goodbye!
```

## Project Structure

- `calculator.js` - Core calculator class with arithmetic operations
- `index.js` - Interactive command-line interface
- `test.js` - Test suite for calculator functionality
- `package.json` - Project configuration

## License

MIT
