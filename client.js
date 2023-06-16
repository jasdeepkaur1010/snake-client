const net = require("net");
//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.27.143.54",
    port: 50541,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Connection Established", data);
  });
  conn.on("connect", () => {
      console.log("Successfully connected to game server");
      conn.write('Name: JK'); //setting name for the snake
    
  //   setInterval(() => {
  //       conn.write("Move: up");
  //       conn.write("Move: left");
  // }, 50)
});
  return conn;

};
// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function (data) {
    if (data === '\u0003') {
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = connect;
module.exports = setupInput;
