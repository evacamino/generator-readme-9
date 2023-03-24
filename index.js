// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { writeFileSync } = fs;
const render = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Select license for project.",
    choices: ["MIT", "IBM", "Unlicensed"],
  },
  {
    type: "input",
    name: "description",
    message: "Type out description"
  },
  {
    type: "input",
    name: "installation",
    message: "Which command to run to install the dependancies?"

  },


  {type: "input",
  name: "usage",
  messagee: ""
  },
  {type: "input",
name: "contributing",
message: "",
  },
{
  type: "input",
  name: "tests",
  message: "Which command should run test?"
},
{
  type: "input",
  name: "features",
  message: "What features?"
}

];
//type: input or list: choices will be an arry
//name : answers.name ex answer.license
//return callbck function
// title, Description, Installation, Usage, Contributing, and Tests
//username, github email, repo link url

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   return fs.writeFileSync
// }


// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
    generateMarkdown(answers)
    writeFileSync("README.md", render(answers));
  } catch (error) {
    console.log(error);
  }
}

// Function call to initialize app
init();
