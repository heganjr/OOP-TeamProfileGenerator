# 10-Object Oriented Programming - Team Profile Generator

by Jacob Hegan

UWA Full-Flex Bootcamp February 2021

[Video Walkthrough](https://drive.google.com/file/d/1xyLrWCjuAw1O3IT-5MsLXNBkJna0MrLo/view)

[GitHub Repository](https://github.com/heganjr/OOP-TeamProfileGenerator)

---

[![MIT](https://img.shields.io/badge/licence-MIT-brightgreen)](https://choosealicense.com/licenses/mit/)

---

## Description

To allow easy creation and quick access to team profile's details

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshot)
- [How To Contribute](#how-to-contribute)
- [Credits](#credits)
- [License](#license)

## Installation

If cloning the repo locally:

npm i

- to install all dependencies found in package.json

npm start

- to launch the inquirer prompts

## Usage

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

---

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

### Screenshot

![success](./Assets/images/generate-success.PNG)

![inquirer](./Assets/images/inquirer.PNG)

![html-generation.png](./Assets/images/html-generation.png)

## How to Contribute

---

Contributions are not possible.

If there are issues you can contact me through my GitHub profile found in the credits below.

I am happy to take on any suggestions and feedback!

---

## Credits

[hegan.jr](https://github.com/heganjr)

---

## License

[MIT](https://choosealicense.com/licenses/mit/)

MIT License

Copyright (c) [2021] [Jacob Hegan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
