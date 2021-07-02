const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// classes are a template - I want a new template and I want to use the xxx.class this is what it needs to run
// inquirer prompts go here
// src - where templates go (generateHTML) - (GenerateCard Based on Enginner, Manager, Intern)
// dist - where the HTML is added

// Global empty array
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Manager's Name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Manager's employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Manager's email?",
  },

  {
    type: "input",
    name: "officeNumber",
    message: "What is the Manager's office number?",
  },
  {
    type: "list",
    name: "task",
    message: "What would you like to do next?",
    choices: ["Add Engineer", "Add Intern", "Generate HTML"],
  },
];

// Manager questions
const teamArray = [];

function createManager() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    // Uses the manager class - get this answers from the questions and pushes it to the Manager constructor

    teamArray.push(newManager);
    console.log("teamarray", teamArray);
    console.log(answers.task);
    switch (answers.task) {
      case "Add Engineer":
        createEngineer();
        break;

      case "Add Intern":
        createIntern();
        break;

      case "Generate HTML":
        generateHtml();
        break;
    }
  });
}
// Switch to move to different functions based on answer to "What do you want to do next?"

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Engineer's Name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Engineer's employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Engineer's email?",
  },

  {
    type: "input",
    name: "gitHub",
    message: "What is the Engineer's Github username?",
  },
  {
    type: "list",
    name: "task",
    message: "What would you like to do next?",
    choices: ["Add Manager", "Add Intern", "Generate HTML"],
  },
];

function createEngineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.gitHub
    );

    teamArray.push(newEngineer);
    //    works
    console.log("team array", teamArray);
    switch (answers.task) {
      case "Add Manager":
        createManager();
        break;

      case "Add Intern":
        createIntern();
        break;

      case "Generate HTML":
        generateHtml();
        break;
    }
  });
}
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Intern's Name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Intern's employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Intern's email?",
  },

  {
    type: "input",
    name: "school",
    message: "What School does the Intern attend?",
  },
  {
    type: "list",
    name: "task",
    message: "What would you like to do next?",
    choices: ["Add Manager", "Add Engineer", "Generate HTML"],
  },
];

function createIntern() {
  inquirer.prompt(internQuestions).then((answers) => {
    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );

    teamArray.push(newIntern);
    console.log("TeamArray with Intern", teamArray);

    switch (answers.task) {
      case "Add Manager":
        createManager();
        break;
      case "Add Engineer":
        createEngineer();
        break;
      case "Generate HTML":
        generateHtml();
        break;
    }
  });
}

createManager();

// Adding a newManager to the manager class

// const engineer = new Engineer(answer.name, answer.id, answer.email);

// teamArray.push(engineer);

// ------ PSUEDO CODE ----------
// npm inquirer

// when promptted for Team Infomation
// Then HTML is generated that displays a nicely formatted team roster

// Add team manager: Done
// - Name - employee ID - email - Office number Done

// menu to add engineer, intern or finish - Done

// Add engineer:
//  - name - ID - email - github username - Done

// menu to add manager, intern or finish - Done

// Add intern: - Done
// - name - ID - email - school - Done

// menu to add engineer, intern or finish - Done

// The html is generated
