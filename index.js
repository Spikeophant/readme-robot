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
    },
    {
        type: 'input',
        message: 'Path to README.md',
        name: 'path'
    },
    {
        type: 'input',
        message: 'Email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Github username?',
        name: 'github'
    },
    {
        type: 'list',
        message: 'Please select a license.',
        name: 'license',
        choices: ['MIT', 'Apache-2.0', 'ISC', 'BSD-3-Clause', 'BSD-2-Clause']
    }
];

// TODO: Create a function to write README file
writeToFile = (data) => {
    console.log('Using path ' + data.path);
    var badge = '';
    switch (data.license) {
        case 'MIT':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Apache-2.0':
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'ISC':
            badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
        case 'BSD-3-Clause':
            badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case 'BSD-2-Clause':
            badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
            break;
    }
    const readmeTemplateLiteral = `
# ${data.title}

## Description

${data.desc}

${badge}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed.

${data.usage}

## Credits and Questions

Please reach out by raising an issue if you have questions or suggestions.
${data.email}
https://github.com/${data.github}

## License

This application is covered by ${data.license}

## How to Contribute

${data.contrib}
## Tests

${data.testing}
    `

    fs.writeFile(data.path, readmeTemplateLiteral, (err) => {
        if (err)
            console.log(err);
        else {
            console.log('README written.')
            console.log('README contents: ')
            console.log(fs.readFileSync(data.path), 'utf8')
        }
    })

}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
            writeToFile(answers);
      })
      .catch((err) => {
          console.log(err);
          console.log("It's dead Jim, there's nothing I can do.");
          process.exit(44);
      });
}

// Function call to initialize app
init();
