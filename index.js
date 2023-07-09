const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

fs.createReadStream("./kepler_dataa.csv")
  .on("data", (chunk) => {
    results.push(chunk);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(results);
    console.log("done");
  });
