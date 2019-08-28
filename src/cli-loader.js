#!/usr/bin/env node
'use strict';
if (Number(process.version.slice(1).split(".")[0]) < 9) throw new Error("Node 9.0.0 or higher is required to use this");
var argv = process.argv.slice(2).toString();
argv = argv.replace(",", " ")

if(!argv){
 console.error(`No Command was provided so here are all commands`)
 console.log(`
  Commands
  - encode ~ Encode provided string to binary
  - decode ~ Decode provided string from binary
  - auto ~ Automatically detects if you wan't decode or encode

  ~~ Example usage at npm package information ~~
 `)
}
try{
if(argv.search("encode") === 0){
argv = argv.replace('encode','');
console.log(require("./index.js").encode(`${argv}`))
process.exit(0)
}

else if(argv.search("decode") === 0){
argv = argv.replace('decode','');
console.log(require("./index.js").decode(`${argv}`))
process.exit(0)
}
 }catch(err){
     throw new Error(err)
 }