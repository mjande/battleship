function renderEmptyGrids() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let i = 1; i <= 10; i += 1) {
      const shipBox = document.createElement("div");
      shipBox.className = "ship-box";

      row.append(shipBox);
    }
  });
}

export { renderEmptyGrids };
