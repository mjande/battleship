import "./styles.css";
import * as GameboardDisplay from "./js/render-gameboard";
import play from "./js/game";

GameboardDisplay.renderEmptyGrids();

const playButton = document.querySelector("button");
playButton.onclick = play;
