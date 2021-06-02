var userSelection;
var compRand;
var compSelection;
var validSelection = false;
var gameResult;

console.log("Welcome to Adam's game of Rock, Paper, Scissors.")


compRand = Math.random();
compSelection = resolveCompChoice(compRand);


do {
  userSelection = prompt("Please select Rock, Paper, or Scissors!").toLowerCase();
  switch(userSelection) {
    case "rock":
      gameResult = resolveGame("rock", compSelection, "scissors");
      validSelection = true;
      break;
    case "paper":
      gameResult = resolveGame("paper", compSelection, "rock");
      validSelection = true;
      break;
    case "scissors":
      gameResult = resolveGame("scissors", compSelection, "paper");
      validSelection = true;
      break;
    default:
      console.log("Invalid input, please try again");
  }
} while(!validSelection);

console.log("You chose: " + userSelection);
console.log("Computer chose: " + compSelection);
console.log("You have " + gameResult + "!");


function resolveCompChoice(compNum) {
  let result;
  
  if(compNum < 0.33) {
    result = "rock";
  } else if(compNum <0.66) {
    result = "paper";
  } else {
    result = "scissors";
  }
  
  return(result);
}

function resolveGame(strUserChoice, strCompChoice, strWinCond) {
  let result;
  if(strCompChoice != strUserChoice) {
        result = (compSelection == strWinCond) ? "won" : "lost"
      } else {
        result = "tied";
      }
  return(result);
}