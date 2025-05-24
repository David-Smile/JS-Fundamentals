const { argv } = require('node:process');

// Get user-passed arguments (starting from index 2)
const userArgs = argv.slice(2);

// Print message based on the number of arguments
if (userArgs.length === 0) {
  console.log("No argument");
} else if (userArgs.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

// Print arguments from index 3 to 0 (in reverse, if they exist)
for (let i = 3; i >= 0; i--) {
  if (argv[i] !== undefined) {
    console.log(`${i}: ${argv[i]}`);
  }
}
