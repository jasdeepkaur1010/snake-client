const net = require("net");
//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.27.143.54",
    port: 50541,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  // return conn;
  conn.on("connect", () => {
    console.log("Connection Established");
    
  return conn;
});
};
module.exports = connect;