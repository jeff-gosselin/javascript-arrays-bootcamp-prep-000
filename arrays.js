var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(myArray, theAddition) {
  var myNewArray = [theAddition, ...myArray];
  return myNewArray;
}

function destructivelyAddElementToBeginningOfArray(myArray, theAddition) {
<<<<<<< HEAD
  myArray.unshift(theAddition);
=======
  myArray = myArray.unshift(theAddition);
>>>>>>> 776739ef5e17af30f9e0d9faa4749cb1eedc8d3d
  return myArray;
}

function addElementToEndOfArray(myArray, theAddition) {
  var myNewArray = [...myArray, theAddition];
  return myNewArray;
}

function destructivelyAddElementToEndOfArray(myArray, theAddition) {
<<<<<<< HEAD
  myArray.push(theAddition);
  return myArray;
}

function accessElementInArray(myArray, theIndex) {
  return myArray[theIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift();
  return myArray;
}

function removeElementFromBeginningOfArray(myArray) {
  return myArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray(myArray) {
  return myArray.slice(0, myArray.length - 1);
=======
  myArray = myArray.push(theAddition);
  return myArray;
>>>>>>> 776739ef5e17af30f9e0d9faa4749cb1eedc8d3d
}