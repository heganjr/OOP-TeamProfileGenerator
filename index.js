const fs = require('fs')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
// classes are a template - I want a new template and I want to use the xxx.class this is what it needs to run
// inquirer prompts go here
// src - where templates go (generateHTML) - (GenerateCard Based on Enginner, Manager, Intern)
// dist - where the HTML is added

// Global empty array

const teamArray = []

const engineer = new Engineer(answer.name, answer.id, answer.email)

teamArray.push(engineer)


