export default function Player(type, opponentBoard) {
  const possibleMoves = [];
  for (let x = 1; x <= 10; x += 1) {
    for (let y = 1; y <= 10; y += 1) {
      possibleMoves.push({ x, y });
    };
  };

  function getRandomNewCoordinates() {
    const randomIndex = Math.floor(Math.random() * possibleMoves.length)
    const nextCoordinates = possibleMoves[randomIndex];
    possibleMoves.splice(randomIndex, 1);
    return nextCoordinates;
  };
  
  function attack(event) {
    if (type === 'human') {
      const { x } = event.target.dataset;
      const { y } = event.target.dataset;
      opponentBoard.receiveAttack(x, y);
    } else {
      const nextCoordinates = getRandomNewCoordinates();
      opponentBoard.receiveAttack(nextCoordinates.x, nextCoordinates.y);
    }
  };

  return { attack }
}