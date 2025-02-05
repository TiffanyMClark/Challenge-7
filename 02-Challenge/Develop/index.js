// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
//const inquirer = require("inquirer");
//const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What do you want your title to be?",
  },
  {
    type: "input",
    name: "Description",
    message: "Please enter a short description about your project.",
  },
  {
    type: "input",
    name: "Installiation",
    message: "What do you need to do to install your project?",
  },
  {
    type: "input",
    name: "Credits",
    message: "List your collaborators if any.",
  },
  {
    type: "input",
    name: "License",
    message: "What License will we be using?",
  },
  {
    type: "input",
    name: "GitHub",
    message: "What is your GitHub URL for this project?",
  },
  {
    type: "input",
    name: "Features",
    message: "List a quick feature rundown.",
  },
];

// TODO: Create a function to write README file

function generateMarkdown(data) {
  return `

    # Title
     ${data.title}


    ## Description
    ${data.Description}


    ## Installiation
     ${data.Installiation}


    ## Credits
     ${data.Credits}
    

    ## License
     ${data.License}


    ## GitHub
     ${data.GitHub}


    ## Features
     ${data.Features}

  
  `;
}
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log("Your Wrote A README.md! Great Jb!")
  );
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
