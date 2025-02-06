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
    name: "description",
    message: "Please enter a short description about your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What do you need to do to install your project?",
  },
  {
    type: "input",
    name: "credits",
    message: "List your collaborators if any.",
  },
  {
    type: "list",
    name: "license",
    message: "What license will we be using?",
    choices: [
      "MIT",
      "Mozilla Public license 2.0",
      "GNU GPL v3",
      "Not Listed, you can change it later",
    ],
  },
  {
    type: "input",
    name: "repo",
    message: "What is your GitHub for this project?",
  },
  {
    type: "input",
    name: "profile",
    message: "What is your GitHub profile?",
  },
  {
    type: "input",
    name: "features",
    message: "List a quick feature rundown.",
  },
  {
    type: "input",
    name: "usage",
    message: "What's the usage for this.",
  },
  {
    type: "input",
    name: "tests",
    message: "How can you test?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Email.",
  },
];

// TODO: Create a function to write README file

function generateMarkdown(data) {
  let licenseBadge = "";
  if (data.license === "MIT") {
    licenseBadge =
      "[![license: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "Mozilla Public license 2.0") {
    licenseBadge =
      "[![license: MPL 2.0](https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (data.license === "GNU GPL v3") {
    licenseBadge =
      "[![license: GPL v3](https://img.shields.io/badge/license-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }

  return `


     ${data.title}

    
${licenseBadge}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)
- [Features](#features)
- [Questions](#questions)


    ## Description
    ${data.description}


    ## Installation
     ${data.installation}


    ## Credits
     ${data.credits}

     ## Tests
     ${data.tests}

    ## license
     ${data.license}


    ## GitHub
     [Project Repository](${data.repo})


    ## Features
     ${data.features}


      ## Usage
     ${data.usage}


      ## Tests
     ${data.tests}


     
     ## Questions
If you have any questions, feel free to reach out to me:

- GitHub: [${data.profile}](${data.profile})
- Email: ${data.email}

 ## GitHub Repository
    [Project Repository](${data.repo})
  
  `;
}
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log("Your Wrote A README.md! Great Job!")
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

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
