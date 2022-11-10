import Gameboard from "./gameboard";
import * as GameboardDisplay from "./render-gameboard";
import Player from "./player";

let humanBoard;
let opponentBoard;
let humanPlayer;
let computerPlayer;

function endGame(winner) {
  GameboardDisplay.removeListeners();

  if (winner === "human") {
    GameboardDisplay.updateMessage("You win! Play again?");
  } else {
    GameboardDisplay.updateMessage("Sorry, you lost. Play again?");
  }
}

function computerTurn() {
  const attack = computerPlayer.attack();
  GameboardDisplay.updateCell(attack.result, "human", attack.coordinates);

  if (humanBoard.hasAllShipsSunk()) {
    endGame("computer");
  }

  GameboardDisplay.updateMessage("Your turn!");
}

function humanTurn(event) {
  const x = event.target.dataset.row;
  const y = event.target.dataset.col;

  const attack = humanPlayer.attack({ x, y });
  GameboardDisplay.updateCell(attack.result, "computer", { x, y }, humanTurn);

  if (opponentBoard.hasAllShipsSunk()) {
    endGame("human");
  } else {
    GameboardDisplay.updateMessage("Your opponent is playing. Please wait.");
    computerTurn();
  }
}

export default function play() {
  GameboardDisplay.reset();

  humanBoard = Gameboard();
  humanBoard.autofill();
  GameboardDisplay.renderHumanBoard(humanBoard);

  opponentBoard = Gameboard();
  opponentBoard.autofill();

  humanPlayer = Player("human", opponentBoard);
  GameboardDisplay.attachListeners(humanTurn);
  computerPlayer = Player("computer", humanBoard);

  GameboardDisplay.updateMessage("You go first!");
}
