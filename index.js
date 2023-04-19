const fs = require("fs");
const inquirer = require("inquirer");

const Questions = [
    {
     name: "email",
     message: "Enter your email" ,
     type: "input"  
    },
    
    {
        name: "github",
        message: "Enter you github username",
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
        options: ["MIT", "BSD", "Eclipse", "Boost"],
        default: "MIT",
        type: "list"
    },

    {
        name: "contributors",
        message: "Enter any contributors to your project (if none put 'none')",
        type: "input"
    },

    {
        name: "install",
        message: "Enter ways you installed your project",
        type: "input"
    },
];

const writeFile = async(data) => {
    try{
        await fs.writeFile("README.md", data);
        console.log("README has been added!");
    } catch(err) {
        console.log(err);
    }
};