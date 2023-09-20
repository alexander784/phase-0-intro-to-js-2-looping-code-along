function countDown(startingNumber) {
    if (typeof startingNumber === 'number' && startingNumber > 0 && Number.isInteger(startingNumber)) {
      for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
      }
    } else {
      console.log("Please provide a positive integer as input.");
    }
  }
  
  countDown(10);

