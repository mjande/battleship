import Player from "../player";

describe("attack()", () => {
  describe("human", () => {
    it("sends attack to board at given coordinates", () => {
      const opponentBoard = { receiveAttack: jest.fn() };
      const player = Player("human", opponentBoard);
      const coordinates = { x: "1", y: "1" };

      player.attack(coordinates);
      expect(opponentBoard.receiveAttack).toHaveBeenCalledWith("1", "1");
    });
  });

  describe("computer", () => {
    it("chooses a random, unused position and sends attack to opponent's board", () => {
      const opponentBoard = { receiveAttack: jest.fn() };
      const player = Player("computer", opponentBoard);

      player.attack();
      expect(opponentBoard.receiveAttack).toHaveBeenCalled();
    });
  });
});
