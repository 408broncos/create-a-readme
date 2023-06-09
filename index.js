//calling consts for "fs" and "inquirer"
const fs = require("fs");
const inquirer = require("inquirer");
//questions that will prompt in terminal
inquirer
    .prompt([
    {
        name: "author",
        message: "Enter your full name",
        type: "input"
    },

    {
        name: "email",
        message: "Enter your email",
        type: "input"
    },

    {
        name: "github",
        message: "Enter your github username",
        type: "input"
    },

    {
        name: "title",
        message: "Enter the title for your project",
        type: "input"
    },

    {
        name: "description",
        message: "Enter a brief description of your project",
        type: "input"
    },

    {
        name: "usage",
        message: "Enter a brief summary of how you use this application",
        type: "input"
    },

    {
        name: "test",
        message: "Enter how you would run tests for your project",
        type: "input"
    },

    {
        name: "license",
        message: "Enter what license you are using for this project",
        choices: ["MIT", "BSD", "Eclipse", "Boost"],
        default: "MIT",
        type: "list"
    },

    {
        name: "contributors",
        message: "Enter any contributions to your project (if none put 'none')",
        type: "input"
    },

    {
        name: "install",
        message: "Enter ways you installed your project",
        type: "input"
    },

    ])


//giving it a .then method for answer inputs in the terminal
    .then(answers => {
    //answers that will display on the generated readme
        const answersStr = generateREADME(answers);
    //new README.md file made 
        fs.writeFile("README.md", answersStr,(err) => {
        if (err) {
        console.error(err); 
        } else {
            //after all questions have been answered a console log displays "it works"
            console.log("it works");
        }
    });
});
//calling all name values to display, inside template literals, all answers to their intended locations on the readme prompt below 
const generateREADME = ({ author, email, github, title, description, usage, test, license, contributors, install }) => {
    return `
# ${title}
![Github license](http://img.shields.io/badge/license-${license}-blue.svg)

## Description

${description}

## Table of contents

* [Installation](#install)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributors)
* [Tests](#test)
* [Author/Questions](#author)

## Installation

${install}

## Markdown

Here's a quick walkthrough demo video showing how this application functions. 


## Usage

${usage}

## License

${license} is the license being used in this repo:


## Contributing

${contributors}

## Tests

${test}

## Author/Questions

### ${author}

If you have any questions regarding this or past projects please email me at the address linked below.

[Email](https://${email})

If you would like to look at any of my past projects feel free to check them out with my github account linked below!

[Github](https://github.com/${github})
`}