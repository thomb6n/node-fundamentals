#! /usr/bin/env node

"use strict";

// process.stdout.write("Hello process");
// console.log("Hello world");

// process.stderr.write("Hello error");
// console.error("Hello error");

printHelp();

function printHelp() {
  console.log("cli usage:");
  console.log("  cli.js --help");
  console.log("");
  console.log("--help   print this help");
  console.log("");
}
