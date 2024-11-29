// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
        const hqBlock = 42;
        return Math.abs(someValue - hqBlock);
}
function distanceFromHqInFeet(someValue) {
    const hqBlock = 42;
    const distance = Math.abs(someValue - hqBlock); 
    return distance * 264;

}

function distanceTravelledInFeet(start, end) {
    const Difference = Math.abs(end - start); 
    return Difference * 264; 
  }

  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination) * 264; 
  
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      const chargedDistance= distance - 400; 
      return chargedDistance * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far';
    }
  }