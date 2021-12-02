const net = require("net");
const readline = require("readline");
const { IP, PORT } = require("./constants");

const rl = readline.createInterface({
  input: process.stdin,
});
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ZM");
  });

  rl.on("line", (input) => {
    conn.write(`Say: ${input}`);
  });

  return conn;
};

module.exports = { connect };
