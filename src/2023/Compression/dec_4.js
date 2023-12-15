// Only currently designed to accept grouped and sorted alphabetical characters i.e. 'aabbcccccdddddeeeffghh'
const string = "aaabbbccccddddeffgghh";

const sortStringIntoObject = (string) => {

  // construct object of unique characters
  const unique = [...new Set(string.split(""))];
  let comprObj = unique.reduce((object, key) => {
    object[key] = [undefined, undefined];
    return object;
  }, {});


  unique.forEach((c, i, a) => {
    let arr = string.split("");
    // get inclusive first index of group and of next group
    const arrIndex = arr.indexOf(c);
    const arrIndexNext = arr.indexOf(a[i + 1]);

    const arrLength = arr.length;
  
    // add current length of substring to compression grouping object, or length (assuming end of array)
    const curr = arr.slice(arrIndex, arrIndexNext >= 0 ? arrIndexNext : arrLength);
    // storing the index of the group and the length; intending to use length to reconstitute simple string and arr for more complex string
    comprObj[c] = [arrIndex, curr.length];
  });
  return comprObj
}

const constructCompressString = (compressionObject) => {
  
  const keys = Object.keys(compressionObject);
  let compressionString = "";

  keys.forEach((key, i, a) => {

    // this is backwards in a way - it would be preferable to generate i.e. 3ab4cd
    // checking if the next item exists
    if (compressionObject[a[i + 1]]?.[1]) {
      // checking if next item has the same length for further grouping
      if (compressionObject[key][1] === compressionObject[a[i + 1]][1]) {
        // if same length, add key i.e. 'a' and break out
        compressionString += key;
        return;
      } else {
        compressionString += key;
      }
      // add number of repetitions to end of letter grouping i.e acd3 (aaacccddd)
      compressionString += compressionObject[key][1];
    } else {
      // assuming at end of list and add whole string
      compressionString += key + compressionObject[key][1];
    }
  });
  return compressionString
};

const reconstituteString = (string) => {
  let bufferArray = []
  let reconstitutedString = ''
  
  const stringToArray = string.split('');
  stringToArray.forEach((c) => {
    // check if valid alphabetical(ish - checking negation of integer)
    const charBool = !parseInt(c)
    // alphabetical push to buffer array
    if (charBool) {
      bufferArray.push(c)
    } else { // if numeric/int parse buffer array and clear array
      bufferArray.forEach((char) => {
        reconstitutedString += char.repeat(parseInt(c))
      })
      bufferArray = []
    }
  })

  return reconstitutedString;
}

console.log(reconstituteString(constructCompressString(sortStringIntoObject(string))))