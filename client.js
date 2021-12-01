const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ZM");
  });

  // conn.on("connect", () => {
  //   // conn.write("Move: up");
  //   //   setTimeout(() => {
  //   //     conn.write("Move: up");
  //   //   }, 50);
  //   //   setTimeout(() => {
  //   //     conn.write("Move: up");
  //   //   }, 100);
  //   //   setTimeout(() => {
  //   //     conn.write("Move: up");
  //   //   }, 150);
  //   //   setTimeout(() => {
  //   //     conn.write("Move: up");
  //   //   }, 200);
  //   // setInterval(() => {
  //   //   conn.write("Move: up");
  //   // }, 50);
  // });

  return conn;
};

module.exports = { connect };
