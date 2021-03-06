const fs = require("fs");
const prettier = require("prettier");

function generateHtml(teamArray) {
  const formattedHTML = prettier.format(
    // HTML generation goes here
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> -->
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
  <section class="card">
  <h2>☕ Jacob</h2>
  <h2 class="manager-header">Manager</h2>
  <div>
  <h4>ID: <span>1</span></h4>
  
  <h4>Email: <span>sofresh1995@hotmail.com</span></h4>
  
  <h4>Office number: <span>69</span></h4>
  </div>
  </section>
  
  <section class="card">
  <h2>👓 Elise</h2>
  <h2 class="engineer-header">Engineer</h2>
  <div>
  <h4>ID: <span>2</span></h4>
  
  <h4>Email: <span>sourbeerconnoisseur@gmail.com</span></h4>
  
  <h4>Github: <span>SourBeerSunsets</span></h4>
  </div>
  </section>
  
  <section class="card">
  <h2>🎓 Tristan</h2>
  <h2 class="intern-header">Intern</h2>
  <div>
  <h4>ID: <span>3</span></h4>
  
  <h4>Email: <span>twistedmouse@gmail.com</span></h4>

  <h4>School: <span>Bootcamp</span></h4>
  </div>
  </section>
  </main>
  </body>
  </html>`,
    { parser: "html" }
  );

  return formattedHTML
}
// dont think this is right - need the team array data

module.exports = generateHtml;
