'use strict';

const fileReader = require('./lib/fs-read.js');

fileReader.readInOrder(fileReader.fileArray, function(err, data) {
  if(err) throw err;
  console.log(data);
});
