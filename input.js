// setup interface to handle user input from stdin

// Stores the active TCP connection object.
let connection;
const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => handleUserInput(key));

  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    console.log("Exiting");
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
};

module.exports = { setupInput };
