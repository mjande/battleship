function renderEmptyGrids() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let i = 0; i <= 9; i += 1) {
      const shipBox = document.createElement("div");
      shipBox.className = "ship-box";
      shipBox.dataset.row = row.dataset.row;
      shipBox.dataset.col = i;
      row.append(shipBox);
    }
  });
}

function attachListeners(callback) {
  const opponentCells = document.querySelectorAll(".computer-grid .ship-box");

  opponentCells.forEach((cell) => {
    cell.addEventListener("click", callback);
  });
}

function renderHumanBoard(humanBoard) {
  for (let r = 0; r < 9; r += 1) {
    for (let c = 0; c < 9; c += 1) {
      if (typeof humanBoard.grid[r][c] === "object") {
        const cell = document.querySelector(
          `.human-grid [data-row="${r}"][data-col="${c}"]`
        );

        cell.classList.add("ship");
      }
    }
  }
}

function updateCell(result, attackee, coordinates, callback) {
  const cell = document.querySelector(
    `.${attackee}-grid [data-row="${coordinates.x}"][data-col="${coordinates.y}"]`
  );

  if (result) {
    cell.classList.remove("ship");
    cell.classList.add("hit");
  } else {
    cell.classList.add("miss");
  }

  if (callback) {
    cell.removeEventListener("click", callback);
  }
}

function updateMessage(string) {
  document.querySelector(".message").textContent = string;
}

function removeListeners(callback) {
  const opponentCells = document.querySelectorAll(".computer-grid .ship-box");

  opponentCells.forEach((cell) => {
    cell.removeEventListener("click", callback);
  });
}

function reset() {
  const allCells = document.querySelectorAll(".ship-box");
  allCells.forEach((cell) => {
    const cellElement = cell;
    cellElement.className = "ship-box";
  });
}

export {
  renderEmptyGrids,
  renderHumanBoard,
  updateMessage,
  attachListeners,
  updateCell,
  removeListeners,
  reset,
};
