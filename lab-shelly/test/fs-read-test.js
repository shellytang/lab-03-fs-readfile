'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/fs-read.js');

describe('fs-read module', function() {

  describe('#readInOrder', function() {

    it('should log the files in order', done => {

      fileReader.readInOrder(fileReader.fileArray, function(err, data) {

        expect(data[0]).to.equal('43617473206d616b');
        expect(data[1]).to.equal('4368617365207265');
        expect(data[2]).to.equal('4a756d70206c6175');
        done();
      });
    });


    //
    // it('should read and log one.txt first', done => {
    //   fileReader.readInOrder(`${__dirname}/../data/one.txt`, function(err, data) {
    //     let dataOne = '43617473206d616b';
    //     expect(data.toString('hex',0,8)).to.equal(dataOne);
    //     done();
    //   });
    // });
    //
    // it('should read and log two.txt file second', done => {
    //   fileReader.readInOrder(`${__dirname}/../data/two.txt`, function(err, data) {
    //     let dataTwo = '4368617365207265';
    //     expect(data.toString('hex',0,8)).to.equal(dataTwo);
    //     done();
    //   });
    // });
    //
    // it('should read and log three.txt file third', done => {
    //   fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
    //     let dataThree = '4a756d70206c6175';
    //     expect(data.toString('hex',0,8)).to.equal(dataThree);
    //     done();
    //   });
    // });

    //   it('should return 8 bytes of hex for each file', done => {
    //     fileReader.readInOrder(`${__dirname}/../data/one.txt`, function(err, data) {
    //       expect(data.toString('hex',0,8).length).to.be.equal(16);
    //       done();
    //     });
    //   });
  });
});
