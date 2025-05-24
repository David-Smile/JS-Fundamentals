#!/usr/bin/env node

const args = process.argv.length - 2;

if (args === 0) {
  console.log("No argument");
} else if (args === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
// Output:
// No argument
// Argument found
// Arguments found
// Explanation:
// This code checks the number of command-line arguments passed to the script. 