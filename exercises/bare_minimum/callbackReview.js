/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function(filePath, callback) {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      return callback(err);
    }
    let firstLine = fileContent.toString().split('\n')[0];
    callback(null, firstLine);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function(url, callback) {
  request(url, (error, response) => {
    let statusCode = response ? response.statusCode : null;
    callback(error, statusCode);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
