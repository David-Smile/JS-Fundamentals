const args = process.argv.slice(2);

if (!args[0] === 0) {
  console.log("No argument");
}
else if (args[0] && !args[1] === 1) {   
  console.log("Argument found");
  console.log(args[0]);
}
else {
  console.log("Arguments found");
    console.log(args.join(", "));
}
// It uses the process.argv array to access the command-line arguments, and the slice method to ignore the first two elements (the node executable and script name).
// Depending on the number of arguments, it prints a corresponding message to the console.