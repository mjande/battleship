import Ship from '../ship';

describe('length', () => {
  it('returns the length of the ship', () => {
    const ship = Ship(4);
    expect(ship.length).toBe(4);
  })
});

describe('isSunk()', () => {
  it('returns false if ship has never been hit', () => {
    const ship = Ship(3);
    expect(ship.isSunk()).toBeFalsy;
  });

  it('returns false if a ship has been hit but not sunk', () => {
    const ship = Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBeFalsy
  })

  it('returns true if the ship has been sunk', () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy
  })
});
