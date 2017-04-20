'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/fs-read.js');

describe('fs-read module', function() {

  describe('#readInOrder', function() {

    it('should return 8 bytes of hex for each file', done => {
      fileReader.readInOrder(fileReader.fileArray, function(err, data) {
        expect(data[0].length).to.equal(16);
        expect(data[1].length).to.equal(16);
        expect(data[2].length).to.equal(16);
        done();
      });
    });

    it('should log the files in order', done => {
      fileReader.readInOrder(fileReader.fileArray, function(err, data) {
        expect(data[0]).to.equal('43617473206d616b');
        expect(data[1]).to.equal('4368617365207265');
        expect(data[2]).to.equal('4a756d70206c6175');
        done();
      });
    });

  });
});
