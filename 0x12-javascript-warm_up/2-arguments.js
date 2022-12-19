#!/usr/bin/node
const y = process.argv.length;

// if (y <= 2){
//     console.log("No argument")
// }else if(y > 2){
//     console.log("argument found")
// }
console.log(y === 2 ? 'No argument' : y === 3 ? 'Argument found' : 'Arguments found');
