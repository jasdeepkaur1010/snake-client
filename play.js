const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting...");
const connn = connect();
setupInput(connn);
