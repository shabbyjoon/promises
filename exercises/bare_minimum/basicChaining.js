/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var fileReader = require('./promiseConstructor.js').pluckFirstLineFromFileAsync;
var getGithub = require('./promisification.js').getGitHubProfileAsync;
var fileWriter = Promise.promisify(fs.writeFile);
// var fileWriterTwo = function(writeFilePath) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(writeFilePath, )
//   });
// }

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return new Promise((resolve, reject) => {
    fileReader(readFilePath)
      .then(getGithub)
      .then(value => fileWriter(writeFilePath, JSON.stringify(value)))
      .then(resolve)
      .catch(reject);
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
