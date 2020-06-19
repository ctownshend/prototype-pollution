// var foo = require("/Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/exploit/prototype-pollution-nsec18/find-vuln/find-vuln.js");
// console.dir(foo ("/Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/npm_libraries/lodash/v4.17.4/node_modules/lodash"));
// node /Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/exploit/prototype-pollution-nsec18/find-vuln/find-vuln.js /Users/camerontownshend/Documents/Cameron/dev/learnVulnerabilities/prototype-pollution/npm_libraries/lodash/v4.17.4/node_modules/lodash

const { Pool, Client } = require('pg');   

const pool = new Pool({
  user: "iq-server",
  host: "postgres",
  database: "fuzzy",
  password: "admin123",
  port: "5432",
});

let sqlString =
  "; INSERT INTO package(format, packagename, dateadded, description) ";
sqlString += ` Values ('npm', 'foo', '2020-06-14', 'test insert' )` 
sqlString += " RETURNING packageid;";
 //return 
pool.query(
  sqlString, (err, res) => {
    console.log(err, res);
    pool.end();
  }
);
