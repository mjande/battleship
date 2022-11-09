import Gameboard from "./gameboard";
import * as GameboardDisplay from "./render-gameboard";
import Player from "./player";

export default function play() {
  const humanBoard = Gameboard();
  humanBoard.autofill();
  GameboardDisplay.renderHumanBoard(humanBoard);

  const opponentBoard = Gameboard();
  opponentBoard.autofill();

  const humanPlayer = Player("human", opponentBoard);
  const computerPlayer = Player("computer", humanBoard);
}
