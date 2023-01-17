function Rock() {
  changeHEAD();
  magic(1);
  
}

function paper() {
  changeHEAD();
  magic(2);
}

function scissor() {
  changeHEAD();
  magic(3);
}

function changeHEAD(){
  var CHANGEhead = document.head.innerHTML ;
  document.head.innerHTML = `
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link
      rel="stylesheet"
      media="screen and (max-width: 937px)"
      href="style3.css"
    />
  <script src="js.js"></script>
  <title>Document</title>
  `;
  return CHANGEhead;
}paper

function magic(variable){
variable = variable.toString();
var randNum = Math.floor(Math.random() * 3) + 1;
randNum = randNum.toString();
var finalValue = parseInt(variable + randNum);
SWITCH(finalValue);

}

function SWITCH(recieved) {
  switch (recieved) {
    case 11:
      document.body.innerHTML = `
  <div class="container">
  <h2>YOU TIED!</h2>
  <div class="selection1">
  <img src="Rock.png" alt="rock"/>
  <img src="Rock.png" alt="rock" class="bot-rock" />
  </div>
  </div>
  `;
      break;
    case 12:
      document.body.innerHTML = `
  <div class="container">
  <h2>YOU LOST!</h2>
  <div class="selection1">
  <img src="Rock.png" alt="rock"/>
  <img src="paper.png" alt="paper" />
  </div>
  </div>
  `;
      break;
    case 13:
      document.body.innerHTML = document.body.innerHTML = `
  <div class="container">
  <h2>YOU WIN!</h2>
  <div class="selection1">
  <img src="Rock.png" alt="rock"/>
  <img src="scissors.png" alt="scissor" />
  </div>
  </div>
  `;
      break;
    case 21:
      document.body.innerHTML = `
      <div class="container">
      <h2>YOU WIN!</h2>
      <div class="selection1">
      <img src="paper.png" alt="paper"/>
      <img src="Rock.png" alt="rock" class="bot-rock" />
      </div>
      </div>
      `;
      break;
    case 22:
      document.body.innerHTML = `
      <div class="container">
      <h2>YOU TIED!</h2>
      <div class="selection1">
      <img src="paper.png" alt="paper"/>
      <img src="paper.png" alt="paper"/>
      </div>
      </div>
      `;
      break;
    case 23:
      document.body.innerHTML = `
      <div class="container">
      <h2>YOU LOST!</h2>
      <div class="selection1">
      <img src="paper.png" alt="paper"/>
      <img src="scissors.png" alt="scissors" />
      </div>
      </div>
      `;
      break;
    case 31:
      document.body.innerHTML = `
      <div class="container">
      <h2>YOU LOST!</h2>
      <div class="selection1">
      <img src="scissors.png" alt="scissors"/>
      <img src="Rock.png" alt="rock" class="bot-rock" />
      </div>
      </div>
      `;
      break;
    case 32:
      document.body.innerHTML = `
      <div class="container">
      <h2>YOU WIN!</h2>
      <div class="selection1">
      <img src="scissors.png" alt="scissors"/>
      <img src="paper.png" alt="paper"  />
      </div>
      </div>
      `;
      break;
    case 33:
      document.body.innerHTML = `
      <div class="container">
      <h2>YOU TIED!</h2>
      <div class="selection1">
      <img src="scissors.png" alt="scissors"/>
      <img src="scissors.png" alt="scissors"  />
      </div>
      </div>
      `;
      break;
  }
}
