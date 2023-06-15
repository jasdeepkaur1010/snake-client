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
      // conn.write("Move: up");
      // conn.write("Move: left");
      // conn.write("Move: down");
    
    setInterval(() => {
        conn.write("Move: up");
  }, 2000)
  //   setTimeout(() => {
  //     conn.on("connect", () => {
  //       conn.write("Move: up");
  //   });
  // }, 2000);
});
    // conn.on("connect", () => {
      // conn.write("Move: down");
    // });
  return conn;

};
module.exports = connect;