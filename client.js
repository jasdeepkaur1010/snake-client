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
    });
  return conn;

};
module.exports = connect;