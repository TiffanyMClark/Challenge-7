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
    name: "Installation",
    message: "What do you need to do to install your project?",
  },
  {
    type: "input",
    name: "Credits",
    message: "List your collaborators if any.",
  },
  {
    type: "list",
    name: "License",
    message: "What License will we be using?",
    choices: [
      "MIT",
      "Mozilla Public License 2.0",
      "GNU GPL v3",
      "Not Listed, you can change it later",
    ],
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
  let licenseBadge = "";
  if ((data, License === "MIT")) {
    ("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
  } else if (data.License === "Mozilla Public License 2.0") {
    ("[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)");
  } else if (data.License === "GNU GPL v3") {
    ("[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
  }

  return `

    # Title
     ${data.title}


    ## Description
    ${data.Description}


    ## Installation
     ${data.Installation}


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

// read me acceptance for challenge ***********
//WHEN I am prompted for information about my application repository

//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options

// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username

// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address

// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents

// THEN I am taken to the corresponding section of the README
