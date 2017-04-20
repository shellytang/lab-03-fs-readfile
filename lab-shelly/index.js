'use strict';

const fileReader = require('./lib/fs-read.js');

//pass in the data and callback as the arguments
fileReader.readInOrder(fileReader.fileArray, function(err, data) {
  if(err) throw err;
  console.log(data);
});
