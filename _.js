

const _ = {
  clamp (number, lower, upper) {
    if (number < lower) {
      return lower;
    }  else if (number > upper) {
      return upper;
    } else {
      return number;
    }
  },

  inRange (number, start = 0, end) {
    if (arguments.length === 2) {
      end = start;
      start = 0;
    } else if (start > end) {
      let endTemp = end;
      end = start;
      start = endTemp;
    }
    return (number >= start && number < end) ? true : false;
  },
  
  words (string) {
    return string.split(' ');
  }, 

  pad (string, length) {
    if (length <= string.length) {
      return string;
    } else {
      let padLength = length - string.length;
      let rightPadCnt = (padLength / 2) + (padLength % 2);
      let leftPadCnt = Math.floor(padLength / 2);
      return " ".repeat(leftPadCnt) + string + " ".repeat(rightPadCnt);
    }  
  },

  has (object, key) {
    return (object[key]  === undefined) ? false: true;
  },

  invert (object) {
    console.log('before', object);
    invertedObj = {};
    for (let property in object) {
      value = object[property];
      invertedObj[value] = property;
    }
    console.log('after', invertedObj);
    return invertedObj;
  },

  findKey (object, predicate) {
    for (let item in object) {
      let value = object[item];
      let functionVal = predicate(value);
      if (functionVal === true) {
        return item;
      }
    }
    return undefined; //if no truthy value was returned in loop, then it's undefined
  },

  drop (array, dropCnt = 1) {
    return array.slice(dropCnt);
  },

  dropWhile (array, predicate) {

  },

  chunk (array, chunkSize = 1) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      let tempChunk = [];
      for (let j = 0; j < chunkSize; j++) { 
        tempChunk.push(array[j]);
      }
      newArray.push(tempChunk);
      array = array.slice(chunkSize); //remove processed elements from source array
    }
    if (array.length > 0) newArray.push(array); //add final element if unevenly divided
    return newArray;
  }
};

// Do not write or modify code below this line.
module.exports = _ ;