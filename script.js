const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            // When a user enters the project title, it's displayed as the title of the README.
            type: 'input',
            name: 'name of Project',
            message: 'What is the name of your Project?',
        },
        {
            // When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'installation instructions',
            message: 'installation instructions',
        },
        {
            type: 'input',
            name: 'usage information',
            message: 'usage information',
        },
        {
            type: 'input',
            name: 'contribution guidelines',
            message: 'contribution guidelines',
        },
        {
            type: 'input',
            name: 'test instructions',
            message: 'test instructions',
        },
        {
            type: 'input',
            name: 'GitHub username',
            message: 'test instructions',
        },
        {
            type: 'input',
            name: 'email address',
            message: 'email address',
        },
        {
            // When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

            type: 'checkbox',
            message: 'What LICENCE would you like for your Project?',
            name: 'stack',
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3'],
        },
    ])
    .then((data) => {
        const filename = `index.html`;

        // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        //     err ? console.log(err) : console.log('Success!')
        // );
    });






// When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.

// When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

// When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.