const fs = require('fs');
const nameLibrary = require('./../config-library.js').nameLibrary;

let package = fs.readFileSync('package.json').toString();
let packageJson = JSON.parse(package);

packageJson.main = nameLibrary + ".umd.js";
packageJson['jsnext:main'] = nameLibrary + ".umd.js";
packageJson.module = nameLibrary + ".esm.js";
packageJson.types = "index.d.ts";
fs.writeFileSync('dist/package.json', JSON.stringify(packageJson, null, 4));
