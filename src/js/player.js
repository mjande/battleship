export default function Player(type, opponentBoard) {
  const possibleMoves = [];
  for (let x = 0; x <= 9; x += 1) {
    for (let y = 0; y <= 9; y += 1) {
      possibleMoves.push({ x, y });
    }
  }

  function getRandomNewCoordinates() {
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const nextCoordinates = possibleMoves[randomIndex];
    possibleMoves.splice(randomIndex, 1);
    return nextCoordinates;
  }

  function attack(coordinateParams) {
    let coordinates = coordinateParams;

    if (coordinates === undefined) {
      coordinates = getRandomNewCoordinates();
    }

    const result = opponentBoard.receiveAttack(coordinates.x, coordinates.y);
    return { result, coordinates };
  }

  return { attack, getRandomNewCoordinates };
}
