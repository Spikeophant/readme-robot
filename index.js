// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
getFilePath = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Path to ReadMe, leave empty for ./README.md',
            name: 'path'
        }
    ]).then((path) => {
      return path;
    })
        .catch((err) => {
            console.log(err);
            console.log('Error obtaining path, please try again after some time.');
            process.exit(127);
        })
}

getReadmeContent = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            return answers;
        })
        .catch((err) => {
            console.log(err);
            console.log("It's dead Jim, there's nothing I can do.");
            process.exit(44);
        });
}


// TODO: Create a function to write README file
writeToFile = (fileName, data) => {
    console.log(fileName);
    console.log(data);
}



// TODO: Create a function to initialize app
init = () => {
    const answers = getReadmeContent();
    const path = getFilePath();
    writeToFile(answers, path)
}

// Function call to initialize app
init();
