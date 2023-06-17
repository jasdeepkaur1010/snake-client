const net = require("net");
const { IP, PORT } = require("./constants");
//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Connection Established", data);
  });
  conn.on("connect", () => {
      console.log("Successfully connected to game server");
      conn.write('Name: JK'); //setting name for the snake
      conn.write('Say: Wo!');
  //   setInterval(() => {
  //       conn.write("Move: up");
  //       conn.write("Move: left");
  // }, 50)
});
  return conn;

};

module.exports = {
  connect
}