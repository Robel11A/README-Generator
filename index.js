
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');
const generateMarkdown = require('./generatemarkDown');

// add the question here
const questions = [ 
{
    typpe: 'input',
    name: 'title',
    message: 'what is the title of your project',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',   
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',  
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',  
},
{
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?',
},
{
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?', 
},
{
    type: 'input',
    name: 'license',
    message: 'What is the license for your project?',
},

{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?', 
},

{
     type: 'input',
     name: 'email',
     message: 'What is your email address?',
}

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
     err ? console.log(err) : console.log('Successfully created README file!')


    );
}


// function to initialize app
function init() {
    inquirer.createPromptModule(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);


    })
    .catch((error) => {
        console.error(error);
    });
}

// Function call to initialize app
init();

