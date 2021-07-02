const fs = require("fs");
const prettier = require('prettier')

function generateHtml(teamArray) {
  // HTML generation goes here
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
    ${generateManagerCard()}
      
      <section class="engineer-card">
        <h2>Elise</h2>
        <i class="fas fa-glasses"></i>
        <h2>Engineer</h2>
        <div>
          <h4>ID: <span>2</span></h4>

          <h4>Email: <span>sourbeerconnoisseur@gmail.com</span></h4>

          <h4>Github: <span>SourBeerSunsets</span></h4>
        </div>
      </section>

      <section class="intern-card">
        <h2>Tristan</h2>
        <i class="fas fa-user-graduate"></i>
        <h2>Intern</h2>
        <div>
          <h4>ID: <span>3</span></h4>

          <h4>Email: <span>twistedmouse@gmail.com</span></h4>

          <h4>School: <span>Bootcamp</span></h4>
        </div>
      </section>
    </main>
  </body>
</html>
`;
}

function generateManagerCard(teamArray) {
  return `
   <section class="manager-card">
   <h2>${teamArray.name}</h2>
   <i class="fas fa-coffee"></i>
   <h2>Manager</h2>
   <div>
    <ul>
      ${teamArray.Manager
        .map((manager) => (
          <li>
            ${manager.name} <b>${manager.quantity}</b>
          </li>
        ))
        .join("")}
      </ul>
   </div>
   </section>;
   `;
}
// dont think this is right - need the team array data

module.exports = generateHtml;
