const fs = require('fs');


const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/intern')


function generateCards(team) {
  let cards = [];
  for (let index = 0; index < team.length; index++) {
    const teamArray = team[index];
   
    const role = teamArray.getRole();

    switch (role) {
   
      case 'Manager':
        const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber)
        cards.push(generateManagerCard(manager));
        continue;
      case 'Engineer':
        const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github)
        cards.push(generateEngineerCard(engineer));
       continue;
      case 'Intern':
        const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school)
        cards.push(generateInternCard(intern));
        continue;
    }
   

  } return cards.join(``)
}

let generateManagerCard = (Manager) => {
  return `

  <div class="cards">

  <div class="card">
    <div class="card-header">
      <i class="fa-solid fa-mug-hot"></i>
    <h4>  ${Manager.getName()}<h4>
    <h4> ${Manager.getRole()} <h4>
      
    </div>
    <div class="card-body">
      <div class="color-body">
        <p class="id">Id:${Manager.id} </p>
        <p class="id link">Email: <a href="mailto:${Manager.email}">${Manager.email}</a>
        <p> Office Number:${Manager.getOfficeNumber()}</p>
      </div>
    </div>
  </div>
  `
}


let generateEngineerCard = (Engineer) => {
  return `
  

  <div class="card">
    <div class="card-header">
    <i class="fa-solid fa-glasses"></i>
    <h4>  ${Engineer.name}<h4>
    <h4> ${Engineer.getRole()} <h4>
      
    </div>
    <div class="card-body">
      <div class="color-body">
        <p class="id link">Id:${Engineer.getId()} </p>
        <p class="id">Email: <a href="mailto:${Engineer.email}"> ${Engineer.email}</a>
        <p> Github: <a href ="https://github.com/${Engineer.getGithub()}"> Link </a></p>
      </div>
    </div>
  </div>
 
  `
}


let generateInternCard = (Intern) => {
  return `


  <div class="card">
    <div class="card-header">
    <i class="fa-solid fa-graduation-cap"></i>
    <h4>  ${Intern.name}<h4>
    <h4> ${Intern.getRole()} <h4>
    </div>
    <div class="card-body">
      <div class="color-body">
        <p class="id">Id:${Intern.getId()} </p>
        <p class="id">Email: <a href="mailto:${Intern.email}">${Intern.email}</a>
        <p> School: ${Intern.getSchool()} </p>
      </div>
    </div>
  </div>
  
  `
}

function generateTeam(team) {
 
  return `
    <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>team-profile-generator</title>
          <script src="https://kit.fontawesome.com/41e77105ca.js" crossorigin="anonymous"></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
          <link rel="stylesheet" href="./style.css" />
        </head>
        
        <body>
          <nav>
            <h1>My Team</h1>
          </nav>
        

          <div>
          <div>
          
          ${generateCards(team)}
          

          </div>
          </div>

  <footer>
</footer>

</body>
</html>
    
    `

}

module.exports = generateTeam;