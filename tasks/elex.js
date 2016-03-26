var shell = require("shelljs");

module.exports = function(grunt) {
  
  grunt.registerTask("elex", function() {
    var done = this.async();
    shell.exec("elex results 2016-03-26 -o json --format-json > data/results.json", done);
  });
  
};