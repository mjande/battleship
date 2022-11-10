import Gameboard from "../gameboard";

jest.mock("../ship", () =>
  jest.fn((length) => {
    const ship = { length };
    return ship;
  })
);

describe("setShip()", () => {
  it("sets ship at given coordinates", () => {
    const board = Gameboard();
    const ship = {};
    board.setShip(ship, [
      { x: "0", y: "0" },
      { x: "0", y: "1" },
      { x: "0", y: "2" },
    ]);

    expect(board.grid["0"]["0"]).toBe(ship);
    expect(board.grid["0"]["1"]).toBe(ship);
    expect(board.grid["0"]["2"]).toBe(ship);
  });
});

describe("receiveAttack()", () => {
  it("returns true for successful hit", () => {
    const board = Gameboard();
    const ship = { hit: jest.fn() };
    board.setShip(ship, [
      { x: "0", y: "0" },
      { x: "0", y: "1" },
      { x: "0", y: "2" },
    ]);

    expect(board.receiveAttack("0", "0")).toBeTruthy();
  });

  it("sends call to hit ship for successful attack", () => {
    const board = Gameboard();
    const ship = { hit: jest.fn() };
    board.setShip(ship, [
      { x: "0", y: "0" },
      { x: "0", y: "1" },
      { x: "0", y: "2" },
    ]);

    board.receiveAttack("0", "1");
    expect(ship.hit).toHaveBeenCalled();
  });

  it("returns false for a missed attack", () => {
    const board = Gameboard();
    expect(board.receiveAttack("1", "1")).toBeFalsy();
  });

  it("sets cell to miss for missed attack", () => {
    const board = Gameboard();
    board.receiveAttack("2", "2");
    expect(board.grid["2"]["2"]).toBe("miss");
  });
});

describe("hasAllShipsSunk()", () => {
  const coordinates1 = [
    { x: "1", y: "1" },
    { x: "2", y: "2" },
  ];
  const coordinates2 = [
    { x: "4", y: "4" },
    { x: "5", y: "4" },
  ];

  it("returns true if all ships have been sunk", () => {
    const board = Gameboard();
    const ship1 = { isSunk: jest.fn(() => true) };
    board.setShip(ship1, coordinates1);
    const ship2 = { isSunk: jest.fn(() => true) };
    board.setShip(ship2, coordinates2);

    expect(board.hasAllShipsSunk()).toBeTruthy();
  });

  it("return false if not all ships have been sunk", () => {
    const board = Gameboard();
    const ship1 = { isSunk: jest.fn(() => false) };
    board.setShip(ship1, coordinates1);
    const ship2 = { isSunk: jest.fn(() => false) };
    board.setShip(ship2, coordinates2);

    expect(board.hasAllShipsSunk()).toBeFalsy();
  });
});

describe("autofill()", () => {
  it("sets ships randomly so that they do not overlap", () => {
    const board = Gameboard();
    board.autofill();

    const filledCellCount = board.grid
      .flat()
      .filter((cell) => typeof cell === "object").length;

    expect(filledCellCount).toBe(17);
  });
});
