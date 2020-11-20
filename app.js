const fs = require('fs')
const inquirer = require("inquirer")
const markdown = require("./utils/generateMarkdown.js")
const gl = require('./utils/generateLicense.js')

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project: '
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description: '
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How does someone install your app: '
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does someone need to do to use your app: '
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guideline regarding this app: '
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you test this app for errors: '
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select one of these licenses for your app: ',
    choices: ['The MIT License', 'Apache 2.0 License', 'Boost Software License 1.0', 'GNU GPL v3', 'Mozilla Public License 2.0']
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please enter instructions on how to reach you with additional questions: '
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
  gl.writeLicenseFile(data.license)
  let readme = markdown(data)
  fs.writeFile(fileName, readme, (err) => { if (err) { console.log(err) } })
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((res) => {
      writeToFile('./results/README.md', res)
    })
    .catch((err) => {
      console.error(err)
    })
}

// function call to initialize program
init();
