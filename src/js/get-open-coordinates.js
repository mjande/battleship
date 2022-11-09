export default function getOpenCoordinates (grid, shipLength) {
  let openCoordinates;
  
  function checkDirection(coordinates, direction) {
    let { x, y } = coordinates;
    openCoordinates = [];
    
    let i = 0;
    // For each space need for the length of the given ship
    while (i < shipLength) {      
      // Move one space in the given direction
      x += direction.x;
      y += direction.y;

      // If that space is not open, end the loop and exit the function
      if (x < 0 || y < 0 || x > grid.length - 1 || 
          y > grid.length - 1 || grid[x][y] !== undefined) {
        openCoordinates = null;
        break;
      };
  
    // While each space is open, add it to openCoordinates
    openCoordinates.push({ x, y });
    i += 1;
    };

    // If all spaces in a given direction are open, for loop will end and 
    // openCoordinates will stay defined, thus ending the entire function
  };
  
  function checkDirections(coordinates) {
    // Direction differentials for each axis
    const possibleDirections = [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
      { x: -1, y: 0 }
    ];
  
    // While there are still directions to check
    while (possibleDirections.length > 0) {
      // Remove direction from queue
      const randomIndex = Math.floor(Math.random() * possibleDirections.length);
      const direction = possibleDirections.splice(randomIndex, 1)[0];
      
      // Check needed spaces in that direction
      checkDirection(coordinates, direction);

      // If checkDirection finds an open direction for this starting coordinate, exit the loop
      if (openCoordinates) {
        break;
      }
    }
  }
  
  // While the function hasn't found an open set of coordinates for this length ship,
  // keep looping
  while (openCoordinates === undefined) {    
    const triedCoordinates = [];
    // Generate a random starting coordinate
    const x = Math.floor(Math.random() * (grid.length - 1));
    const y = Math.floor(Math.random() * (grid.length - 1));

    // If that coordinate is open, check in each direction
    if (grid[x][y] === undefined && !triedCoordinates.includes({ x, y})) {
      checkDirections({ x, y });
    }

    triedCoordinates.push({x, y});
  }
  
  return openCoordinates;
}

