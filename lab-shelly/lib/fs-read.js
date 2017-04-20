'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.fileArray = [`${__dirname}/../data/one.txt`,`${__dirname}/../data/two.txt`,`${__dirname}/../data/three.txt`];

exports.readInOrder = function(files, callback) {

  let results = []

  fs.readFile(files[0], function(err, data) {
    if(err) throw callback(err);
    let fileOneData = data.toString('hex',0,8);
    results.push(fileOneData);

    fs.readFile(files[1], function(err, data) {
      if(err) throw callback(err);
      let fileTwoData = data.toString('hex',0,8);
      results.push(fileTwoData);

      fs.readFile(files[2], function(err, data) {
        if(err) throw callback(err);
        let fileThreeData = data.toString('hex',0,8);
        results.push(fileThreeData);

//callback takes error and results paramenter
        return callback(null, results);
      });
    });
  });
};
