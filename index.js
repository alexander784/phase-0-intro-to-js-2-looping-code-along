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

  function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
    return messages;
  }
  

