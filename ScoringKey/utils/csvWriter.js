const fs = require("fs");

const toCSV = function(objArray) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  //console.log(objArray);

  var str = "";

  for (let prop in objArray[0]) {
    str += '"' + prop + '",';
  }

  str += "\r\n";

  for (var i = 0; i < array.length; i++) {
    var line = "";

    for (var index in array[i]) {
      line += '"' + array[i][index] + '",';
    }

    line.slice(0, line.Length - 1);

    str += line + "\r\n";
  }

  fs.writeFile("output.csv", str, error => {
    if (error) console.log(error);
    else console.log("");
  });
};

module.exports = { toCSV: toCSV };
