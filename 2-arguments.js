#!/usr/bin/env node

const args = process.argv.slice(1); // Get the actual command-line arguments (excluding node and script path)

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
// Output will depend on the number of command-line arguments passed when running the script.
// Explanation:
// This code checks the number of command-line arguments passed to the script.
// It uses process.argv to access the command-line arguments, excluding the first two elements which are the Node.js executable and the script path.
// Depending on the number of arguments, it prints different messages:
// - If no arguments are provided, it prints "No argument".
// - If one argument is provided, it prints "Argument found".
// - If more than one argument is provided, it prints "Arguments found".
// Note: This code is written in JavaScript and is intended to be run in a Node.js environment.