#!/usr/bin/node
const y = process.argv[2];

if (isNaN(y)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < y; i++) {
    let v = '';
    for (let j = 0; j < y; j++) {
      v = v + 'x';
    }
    console.log(v);
  }
}
