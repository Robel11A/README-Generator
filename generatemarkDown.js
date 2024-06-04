
// Function to rendr the license badge 
function renderLicenseBadge(license) {
    if(license){
        return '';
    }
    const badges = {
        'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
        'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
        'ISC': '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'

    };
    return badges [license] || '';
}

// function to render the license link
function renderLicenseLink(license) {
    if(license){
         return ''; // If there is no license, return an empty string
     }
     const links = {
        'MIT': 'https://opensource.org/licenses/MIT',
        'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
        'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
        'ISC': 'https://opensource.org/licenses/ISC'

     };
     return links[license] || '';
}

// function to render the license section of README

function renderLicenseSection(license) {
    if(license) {
        return '';

    } 
     return '## LicenseThis project is licensed under the [${license}](${renderLicenseLink(license)}) license.'; // If there is no license, return an empty string'
     }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown

