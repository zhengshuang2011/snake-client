// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    process.stdout.write("Move Up");
  }
  if (key === "a") {
    process.stdout.write("Move Left");
  }
  if (key === "s") {
    process.stdout.write("Move Down");
  }
  if (key === "d") {
    process.stdout.write("Move Right");
  }
};

module.exports = { setupInput };
