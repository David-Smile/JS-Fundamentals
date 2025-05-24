const args = process.argv.slice(2);

if (!args[0]) {
  console.log("No argument");
} else if (args[0] && !args[1]) {
  console.log("Argument found");
  console.log(args[0]);
} else {
  console.log("Arguments found");
  console.log(args.join(" "));
}

// // It uses process.argv to access the command-line arguments, and the length of the array to determine how many arguments were provided.
// // If no arguments are provided, it prints "No argument". If one argument is provided, it prints "Argument found" followed by the argument.
// If more than one argument is provided, it prints "Arguments found" followed by all the arguments joined by a space.
// // The code is written in JavaScript and is intended to be run in a Node.js environment.
// // It demonstrates basic command-line argument handling in JavaScript.
// // The output will vary based on the number of arguments provided when running the script.
// // Note: The code is designed to be run in a Node.js environment, and the output will depend on the command-line arguments passed when executing the script.
// // For example, running the script with no arguments will output "No argument", running it with one argument will output "Argument found" followed by the argument, and running it with multiple arguments will output "Arguments found" followed by all the arguments.
// // This code is useful for understanding how to handle command-line arguments in JavaScript, particularly in a Node.js context.
// // It can be used in various scenarios where command-line input is required, such as scripts, automation tasks, or command-line tools.