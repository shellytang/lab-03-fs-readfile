'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
  if(err) throw err;
  console.log(data);
  console.log('one.txt first eight: ' + data.toString('hex',0,8));
});

fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
  if(err) throw err;
  console.log(data);
  console.log('two.txt first eight: ' + data.toString('hex',0,8));
});

fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
  if(err) throw err;
  console.log(data);
  console.log('three.txt first eight: ' + data.toString('hex',0,8));
});
