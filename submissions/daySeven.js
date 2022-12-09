// The aim is to create a file which can only be run once because it breaks itself.
import fs from "fs"

let thisFileText = fs.readFileSync("./daySeven.js", "utf-8");

let breakFileText = thisFileText.split("").map(char => char += "1337").join("");

fs.writeFileSync("./daySeven.js", breakFileText);