const fs = require("fs");

const toCSV = function(objArray) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  console.log(objArray);

  var str = "";

  for (let prop in objArray[0]) {
    str += '"' + prop + '",';
  }

  str += "\r\n";

  for (var i = 0; i < array.length; i++) {
    var line = "";

    //    for (var index in array[i]) {
    //    line += array[i][index] + ",";
    // }

    // Here is an example where you would wrap the values in double quotes
    for (var index in array[i]) {
      line += '"' + array[i][index] + '",';
    }

    line.slice(0, line.Length - 1);

    str += line + "\r\n";
  }
  //console.log(str);

  fs.writeFile("output.csv", str, error => {
    if (error) console.log(error);
    else console.log("sss ");
  });
  //window.open( "data:text/csv;charset=utf-8," + escape(str))
};

//toCSV(objArray);

module.exports = { toCSV: toCSV };
