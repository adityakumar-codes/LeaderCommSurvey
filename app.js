const reader = require("./ScoringKey/utils/appSheetReader");
const csvWriter = require("./ScoringKey/utils/csvWriter");
const evaluator = require("./evaluator");

const formData = reader.readSheet("TestFormData.xlsx");

var output = [];

formData.forEach(data => {
  var looper = 0;
  var leadership = evaluator.leadershipSum(data);
  var communication = evaluator.communicationSum(data);

  var outputOBJ = {
    id: data["Email address"],
    Name: data["Name"],
    "Administrative skill": leadership.administrativeSkill,
    "InterPersonal skill": leadership.interPersonalSkill,
    "Conceptual skill": leadership.conceptualSkill,
    "Clarity of communication": communication["clarity of communication"],
    "Ability to get feedback": communication["Ability to get feedback"],
    "Handle emotions": communication["handle emotions"],
    "Listening skills": communication["listening skills"]
  };
  output.push(outputOBJ);
});

csvWriter.toCSV(output);
