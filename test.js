const Calculator = require('./calculator');

// Simple test framework
let passedTests = 0;
let failedTests = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`✓ ${testName}`);
    passedTests++;
  } else {
    console.log(`✗ ${testName}`);
    failedTests++;
  }
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`✓ ${testName}`);
    passedTests++;
  } else {
    console.log(`✗ ${testName} - Expected: ${expected}, Got: ${actual}`);
    failedTests++;
  }
}

function assertThrows(fn, testName) {
  try {
    fn();
    console.log(`✗ ${testName} - Expected error but none was thrown`);
    failedTests++;
  } catch (error) {
    console.log(`✓ ${testName}`);
    passedTests++;
  }
}

console.log('Running Calculator Tests...\n');

const calculator = new Calculator();

// Addition tests
console.log('Addition Tests:');
assertEqual(calculator.add(2, 3), 5, 'add(2, 3) should return 5');
assertEqual(calculator.add(-1, 1), 0, 'add(-1, 1) should return 0');
assertEqual(calculator.add(0, 0), 0, 'add(0, 0) should return 0');
assertEqual(calculator.add(1.5, 2.5), 4, 'add(1.5, 2.5) should return 4');

// Subtraction tests
console.log('\nSubtraction Tests:');
assertEqual(calculator.subtract(5, 3), 2, 'subtract(5, 3) should return 2');
assertEqual(calculator.subtract(1, 1), 0, 'subtract(1, 1) should return 0');
assertEqual(calculator.subtract(0, 5), -5, 'subtract(0, 5) should return -5');
assertEqual(calculator.subtract(10.5, 0.5), 10, 'subtract(10.5, 0.5) should return 10');

// Multiplication tests
console.log('\nMultiplication Tests:');
assertEqual(calculator.multiply(2, 3), 6, 'multiply(2, 3) should return 6');
assertEqual(calculator.multiply(-2, 3), -6, 'multiply(-2, 3) should return -6');
assertEqual(calculator.multiply(0, 100), 0, 'multiply(0, 100) should return 0');
assertEqual(calculator.multiply(2.5, 4), 10, 'multiply(2.5, 4) should return 10');

// Division tests
console.log('\nDivision Tests:');
assertEqual(calculator.divide(6, 3), 2, 'divide(6, 3) should return 2');
assertEqual(calculator.divide(10, 2), 5, 'divide(10, 2) should return 5');
assertEqual(calculator.divide(7, 2), 3.5, 'divide(7, 2) should return 3.5');
assertEqual(calculator.divide(0, 5), 0, 'divide(0, 5) should return 0');
assertThrows(() => calculator.divide(5, 0), 'divide(5, 0) should throw error');

// Summary
console.log('\n' + '='.repeat(40));
console.log(`Tests Passed: ${passedTests}`);
console.log(`Tests Failed: ${failedTests}`);
console.log('='.repeat(40));

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('\nAll tests passed! ✓');
  process.exit(0);
}
