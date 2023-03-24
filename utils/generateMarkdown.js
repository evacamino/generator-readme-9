// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if the user chose x
  // return ''
  switch(license) {
    case "MIT": 
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    
    case "IBM":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"

    
    case "Unlicensed":
     return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      case "IBM":
        return "- [License](#license)"
      case "Unlicensed":
        return ""

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case "MIT":
      case "IBM":
        return "- [License](#license)"
      case "Unlicensed":
        return ""

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
## Installation
${data.installation}


## Usage
${data.usage}


## Credits
${data.credits}

---

🏆 
## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Features
${data.features}


## How to Contribute
${data.contributing
}
## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
