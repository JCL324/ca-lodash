

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

  findKey () {
    
  }
};

// Do not write or modify code below this line.
module.exports = _ ;