const fs = require('fs')

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => console.log(err))
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
