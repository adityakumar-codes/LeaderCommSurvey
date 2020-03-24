//const fs = require("fs");

const reader = require("./ScoringKey/utils/appSheetReader");
const csvWriter = require("./ScoringKey/utils/csvWriter");
const evaluator = require("./evaluator");

const formData = reader.readSheet("TestFormData.xlsx");
//var answers = fs.readFileSync("ScoringKey/ScoringKey.json");
//answers = JSON.parse(answers);
var output = [];

formData.forEach(data => {
  var looper = 0;

  var leadership = evaluator.leadershipSum(data);
  var communication = evaluator.communicationSum(data);

  //console.log(data);

  var outputOBJ = {
    id: data["Email Address"],
    leadership_AdministrativeSkill: leadership.administrativeSkill,
    leadership_InterPersonalSKill: leadership.interPersonalSkill,
    leadership_ConceptualSkill: leadership.conceptualSkill,
    communication: communication.communicationScore
  };
  //console.log(outputOBJ);
  // csvWriter.toCSV(outputOBJ);
  output.push(outputOBJ);
  //console.log(leadership);
  //console.log(communication);
});

//console.log(formData);
csvWriter.toCSV(output);
//console.log(JSON.parse(answers));
