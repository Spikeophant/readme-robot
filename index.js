// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description of Project?',
        name: 'desc'},
    {
        type: 'input',
        message: 'Installation Instructions!',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage Information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution Guidelines?',
        name: 'contrib'
    },
    {
        type: 'input',
        message: 'Testing Instructions?',
        name: 'testing'
    }
];

getReadmeContent = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            return answers;
        })
        .catch((err) => {
            console.log(err);
            console.log("It's dead Jim, there's nothing I can do.");
            process.exit();
        });
}


// TODO: Create a function to write README file
writeToFile = (fileName, data) => {

}



// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
