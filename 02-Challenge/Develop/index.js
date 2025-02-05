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
    name: "github.repo",
    message: "What is your GitHub URL for this project?",
  },
  {
    type: "input",
    name: "github.profile",
    message: "What is your GitHub profile URL?",
  },
  {
    type: "input",
    name: "features",
    message: "List a quick feature rundown.",
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

    # Title
     ${data.title}

    
${licenseBadge}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Credits](#credits)
- [License](#license)
- [GitHub](#github)
- [Features](#features)
- [Questions](#questions)


    ## Description
    ${data.description}


    ## Installation
     ${data.installation}


    ## Credits
     ${data.credits}
    

    ## license
     ${data.license}


    ## GitHub
     [Project Repository](https://github.com/${data.github.repo})


    ## Features
     ${data.features}


     
     ## Questions
If you have any questions, feel free to reach out to me:

- GitHub: [${data.github.profile}](https://github.com/${data.github.profile})
- Email: ${data.email}

  
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
//WHEN I am prompted for information about my application repository

//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, license, Contributing, Tests, and Questions

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options (YES!!)

// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled license that explains which license the application is covered under

// WHEN I enter my GitHub username
// okay so i have the github link for the repo. what do i need to add and call it to do a separate profile link....

// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile ( i have the repo ? maybe add another for the profile? can i space it does that work ?)

// WHEN I enter my email address

// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents

// THEN I am taken to the corresponding section of the README
