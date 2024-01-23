#! /usr/bin/env node

"use strict";

const minimist = require("minimist");

const args = minimist(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"],
});

if (args.help) {
  printHelp();
} else if (args.file) {
  console.log(args.file);
} else {
  error("Incorrect usage.", true);
}

// process.stdout.write("Hello process");
// console.log("Hello world");

// process.stderr.write("Hello error");
// console.error("Hello error");

function printHelp() {
  console.log("cli usage:");
  console.log("  cli.js --help");
  console.log("  cli.js --file='hello world'");
  console.log("");
  console.log("--help   print this help");
  console.log("--file   print the contents");
  console.log("");
}

function error(msg, includeHelp = false) {
  console.error(msg);

  if (includeHelp) {
    console.log("");
    printHelp();
  }
}
