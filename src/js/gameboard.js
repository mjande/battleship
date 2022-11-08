export default function Gameboard() {
  const grid = [
    Array(10),
    Array(10),
    Array(10), 
    Array(10),
    Array(10),
    Array(10), 
    Array(10), 
    Array(10), 
    Array(10), 
    Array(10)
  ];

  const ships = [];

  function setShip(ship, coordinates) {    
    coordinates.forEach((coordinate) => {
      grid[coordinate.x][coordinate.y] = ship;
      ships.push(ship);
    });
  };

  function receiveAttack(x, y) {
    const cell = grid[x][y];

    if (typeof cell === 'object') {
      cell.hit()
      grid[x][y] = 'hit';
      return true;
    }; 

    grid[x][y] = 'miss';
    return false;
  };

  function hasAllShipsSunk() {
    return ships.every((ship) => ship.hasSunk());
  };

  return { grid, setShip, receiveAttack, hasAllShipsSunk }
}

