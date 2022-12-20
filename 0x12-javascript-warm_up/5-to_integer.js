#!/usr/bin/node
const y = Math.floor(Number(process.argv[2]));
if (isNaN(y)) {
  console.log('Not a number');
} else {
  console.log(parseInt(y));
}
