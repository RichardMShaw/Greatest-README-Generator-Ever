const fs = require('fs')
const inquirer = require("inquirer")
const markdown = require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project: '
  },
  {
    type: 'input',
    name: 'desc',
    message: 'Please enter a description: '
  },
  {
    type: 'input',
    name: 'install',
    message: 'How does someone install your app: '
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does someone need to do to use your app: '
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'What are the contribution guideline regarding this app: '
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please give simple code examples as to how to run the app: '
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select one of these licenses for your app: ',
    choices: ["MIT", "MPL", "GPL", "Apache", "Boost"]
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your github username: '
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address: '
  }

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => console.log(err))
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
}

// function call to initialize program
init();
