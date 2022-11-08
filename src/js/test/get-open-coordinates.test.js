import getOpenCoordinates from "../get-open-coordinates";

describe('getOpenCoordinates()', () => {
  it('returns a set of coordinates for the given ship length', () => {
    const grid = [...Array(4)].map(() => Array(4));

    expect(getOpenCoordinates(grid, 2).length).toBe(2);
  });

  it('will not return coordinates filled by another ship', () => {
    jest.spyOn(global.Math, 'random').mockReturnValueOnce(0).mockReturnValueOnce(0);
    
    const grid = [...Array(4)].map(() => Array(4));
    grid[0][0] = 'ship';

    expect(getOpenCoordinates).not.toBe({ x: 0, y: 0 });
  });
})