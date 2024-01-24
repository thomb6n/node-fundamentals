#! /usr/bin/env node

"use strict";

const path = require("node:path");
const fs = require("node:fs");
const util = require("node:util");

const minimist = require("minimist");
const getStdin = require("get-stdin");

const args = minimist(process.argv.slice(2), {
  boolean: ["help", "in"],
  string: ["file"],
});

if (args.help) {
  printHelp();
} else if (args.in) {
  getStdin().then(processFile).catch(error);
} else if (args.file) {
  const filePath = path.resolve(args.file);

  fs.readFile(filePath, (err, contents) => {
    if (err) {
      error(err.toString());
    } else {
      processFile(contents.toString());
    }
  });
} else {
  error("Incorrect usage.", true);
}

function printHelp() {
  console.log("cli usage:");
  console.log("  cli.js --help");
  console.log("");
  console.log("--help              print this help");
  console.log("--file={FILENAME}   print the contents");
  console.log("--in                process stdin");
  console.log("");
}

function error(msg, includeHelp = false) {
  console.error(msg);

  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

function processFile(contents) {
  process.stdout.write(contents);
}
