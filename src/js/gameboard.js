import getOpenCoordinates from './get-open-coordinates';
import Ship from './ship';

export default function Gameboard() {
  const grid = [...Array(10)].map(() => Array(10));

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

  function autofill() {
    const carrier = Ship(5);
    let openCoordinates = getOpenCoordinates(grid, 5);
    setShip(carrier, openCoordinates);

    const battleship = Ship(4);
    openCoordinates = getOpenCoordinates(grid, 4);
    setShip(battleship, openCoordinates);

    const destroyer = Ship(3);
    openCoordinates = getOpenCoordinates(grid, 3);
    setShip(destroyer, openCoordinates);

    const submarine = Ship(3);
    openCoordinates = getOpenCoordinates(grid, 3);
    setShip(submarine, openCoordinates);

    const patrolBoat = Ship(2);
    openCoordinates = getOpenCoordinates(grid, 2);
    setShip(patrolBoat, openCoordinates);

    return ships;
  }

  return { grid, setShip, receiveAttack, hasAllShipsSunk, autofill }
}

