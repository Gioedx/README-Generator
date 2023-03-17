import inquirer from 'inquirer';
import fs from "fs/promises";

let {title, description, installation, usage, license, contributing, tests, username, email} = await inquirer 
.prompt([
      {
          type: 'input',
          name: 'title',
          message: "What is your project title?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Describe this project?",
          },
      {
          type: 'input',
          name: 'installation',
          message: "What is required for installing this project?",
        },
      {
          type: 'input',
          name: 'usage',
          message: "What is the usage for this project?",
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you need?',
            choices: ['Apache', 'Boost', 'BSD'],
            filter(val) {
              return val.toLowerCase();
            },
          },
          {
              type: 'input',
              name: 'contributing',
              message: "How can I contribute to this project?",
            },
            {
                type: 'input',
                name: 'tests',
                message: "Are there any or bugs within this project?",
              },
              {
                  type: 'input',
                  name: 'username',
                  message: "Enter username:",
                },
            {
                type: 'input',
                name: 'email',
                message: "Enter email address:",
              },
])

// Generate the text for the README file
var readmeinfo = `
# Project title
${title} 
## Description
### What is the use of this project?
${description}


## Table of Contents:



* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)


## Installation
### What is required for installing this project??
${installation}

## Usage
### What is the usage for this project?
${usage}

## Tests
### Are there any or bugs within this project?
${tests}

## Contributing
### How can I contribute to this project?
${contributing}


## License
${generateLicense(license)}


## Questions
### How can i contact you if any problems arise?<br>
My github: www.github.com/${username}
My email address: ${email}
`

// Write the README file to disk
fs.writeFile("README.md", readmeinfo)


function generateLicense(license){
    if(license === "apache") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "boost") {
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else (license === "bsd") 
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    
    }











