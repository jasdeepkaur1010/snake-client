// const w = "Move: up";
// const a = "Move: left";
// const s = "Move: down";
// const d = "Move: right";

//store the actuve TCP connection object;
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = (data) => {
    if (data === '\u0003') {
      process.exit();
    }
    if (data === 'w') {
      // console.log(data);
      connection.write('Move: up');
    }
    if (data === 'a') {
    connection.write('Move: left');
    }
    if (data === 's') {
      connection.write('Move: down');
    }
    if (data === 'd') {
      connection.write('Move: right');
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
