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

export { renderEmptyGrids, renderHumanBoard };
