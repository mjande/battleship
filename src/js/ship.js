export default function Ship(length) {
  let hits = 0;
  
  function hit() {
    hits += 1;
  }

  function isSunk() {
    return hits >= length
  }
  
  return { length, hit, isSunk }
}