const reader = require("./utils/appSheetReader");
const fs = require("fs");

const answers = reader.readSheet("CommScoringKey.xlsx");

fs.writeFile("CommScoringKey.json", JSON.stringify(answers), error => {
  if (error) {
    console.log(error + "");
  }
});
