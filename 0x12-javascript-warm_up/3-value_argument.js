#!/usr/bin/node
const y = process.argv[2];
if (typeof y === 'undefined') {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
