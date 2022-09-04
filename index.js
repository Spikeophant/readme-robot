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
        message: 'Github profile link?',
        name: 'github'
    }
];

// TODO: Create a function to write README file
writeToFile = (data) => {
    console.log('Using path ' + data.path);
    const readmeTemplateLiteral = `
    # ${data.title}

## Description

${data.description}

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

## Credits

${data.email}
${data.github}

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges


## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
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
