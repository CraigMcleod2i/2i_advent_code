// Only currently designed to accept grouped and sorted alphabetical characters i.e. 'aabbcccccdddddeeeffghh'
const string = "aaabbbccccddddeffgghhhhhhh";

const sortStringIntoObject = (string) => {

  // construct object of unique characters
  const unique = [...new Set(string.split(""))];
  let comprObj = unique.reduce((object, key) => {
    object[key] = [undefined, undefined];
    return object;
  }, {});


  unique.forEach((c, i, a) => {
    let arr = string.split("");
    const arrIndex = arr.indexOf(c);
    const arrIndexNext = arr.indexOf(a[i + 1]);
    const arrLength = arr.length;
  
    let curr = arr.slice(arrIndex, arrIndexNext >= 0 ? arrIndexNext : arrLength);
    comprObj[c] = [arrIndex, curr.length];
  });
  console.log(comprObj)
  return comprObj
}

const constructCompressString = (compressionObject) => {
  const keys = Object.keys(compressionObject);
  let compressionString = "";
  keys.forEach((key, i, a) => {

    // this is backwards in a way - it would be preferable to generate i.e. 3ab4cd
    if (compressionObject[a[i + 1]]?.[1]) {
      if (compressionObject[key][1] === compressionObject[a[i + 1]][1]) {
        compressionString += key;
        return;
      } else {
        compressionString += key;
      }
      compressionString += compressionObject[key][1];
    } else {
      compressionString += key + compressionObject[key][1];
    }
  });

  return compressionString
};

const reconstituteString = (string) => {
  let bufferArray = []
  let reconstitutedString = ''
  
  const stringToArray = string.split('');
  console.log(stringToArray)
  stringToArray.forEach((c) => {
    const charBool = !parseInt(c)
    if (charBool) {
      bufferArray.push(c)
    } else {
      bufferArray.forEach((char) => {
        reconstitutedString += char.repeat(parseInt(c))
      })
      bufferArray = []
    }
  })

  return reconstitutedString;
}