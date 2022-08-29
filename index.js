// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ['Project Title?','Description of Project?', 'Installation Instructions!', 'Usage Information',
    'Contribution Guidelines?', 'Testing Instructions?'];
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
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
