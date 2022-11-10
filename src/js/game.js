import Gameboard from "./gameboard";
import * as GameboardDisplay from "./render-gameboard";
import Player from "./player";

let humanBoard;
let opponentBoard;
let humanPlayer;
let computerPlayer;

function computerTurn() {
  const attack = computerPlayer.attack();
  GameboardDisplay.updateCell(attack.result, "human", attack.coordinates);

  GameboardDisplay.updateMessage("Your turn!");
}

function humanTurn(event) {
  const x = event.target.dataset.row;
  const y = event.target.dataset.col;

  const attack = humanPlayer.attack({ x, y });
  GameboardDisplay.updateCell(attack.result, "computer", { x, y }, humanTurn);

  if (opponentBoard.hasAllShipsSunk()) {
    GameboardDisplay.removeListeners(humanTurn);
    GameboardDisplay.updateMessage("You win! Play again?");
  } else {
    GameboardDisplay.updateMessage("Your opponent is playing. Please wait.");
    computerTurn();
  }
}

export default function play() {
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
