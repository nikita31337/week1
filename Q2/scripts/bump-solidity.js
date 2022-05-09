const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content_hello = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped_hello = content_hello.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_hello = bumped_hello.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped_hello);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment

let content_multi = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumped_multi = content_multi.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_multi = bumped_multi.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumped_multi);
