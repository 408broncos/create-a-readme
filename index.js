const fs = require("fs");
const inquirer = require("inquirer");
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
        message: "Enter any contributors to your project (if none put 'none')",
        type: "input"
    },

    {
        name: "installation",
        message: "Enter ways you installed your project",
        type: "input"
    },

    ])


.then(answers => {
    const answersStr = generateREADME(answers);
    fs.writeFile("README.md", answersStr,(err) => {
        if (err) {
        console.error(err); 
        } else {
            console.log("it works");
        }
    });
});
const generateREADME = ({ author, email, github, title, description, usage, test, license, contributors, install }) => {
    return `
# ${title}

## Description

This Prework Study Guide helps show new begineers a glimpse into what HTML, Javascript and CSS is.

${description}


## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
${install}

## Usage

This study guide can be used for multiple reasons, but what ive found that helped me was understanding what web development is. Having knowledge about all of the languages and how to use terminal and github is something I would have never been able to understand without this study guide.

${usage}

## License

${license}


## How to Contribute

If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

${contributors}

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

${test}

## Author

### ${author}
[Email](https://${email})
[Github](https://github.com/${github})
`}