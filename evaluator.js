const fs = require("fs");

const leadershipSum = function(data) {
  const admin = [0, 3, 6, 9, 12, 15]; // 1,4,7,10,13,16
  const interP = [1, 4, 7, 10, 13, 16]; // 2,5,8,11,14,17
  const concept = [2, 5, 8, 11, 14, 17]; // 3,6,9,12,15,18

  const leaderStart = 7; //7-24
  const leaderEnd = 24;

  var looper = 0;
  var adminScore = 0;
  var interScore = 0;
  var conceptScore = 0;

  for (let prop in data) {
    if (looper >= leaderStart && looper <= leaderEnd) {
      //console.log(data[prop]);
      if (admin.indexOf(looper - leaderStart) != -1) adminScore += data[prop];
      else if (interP.indexOf(looper - leaderStart) != -1)
        interScore += data[prop];
      else conceptScore += data[prop];
    }
    looper += 1;
  }
  /*  Leadership Skills: 
  If your score is 26–30, you are in the very high range.
   If your score is 21–25, you are in the high range.
   If your score is 16–20, you are in the moderate range.
   If your score is 11–15, you are in the low range.
   If your score is 6–10, you are in the very low range
  */

  var leadership = {
    administrativeSkill: adminScore,
    interPersonalSkill: interScore,
    conceptualSkill: conceptScore
  };

  for (prop in leadership) {
    if (leadership[prop] >= 26 && leadership[prop] <= 30)
      leadership[prop] = "very high";
    else if (leadership[prop] >= 21 && leadership[prop] <= 25)
      leadership[prop] = "high";
    else if (leadership[prop] >= 16 && leadership[prop] <= 20)
      leadership[prop] = "moderate";
    else if (leadership[prop] >= 11 && leadership[prop] <= 15)
      leadership[prop] = "low";
    else leadership[prop] = "very low";
  }

  return leadership;
};

const communicationSum = function(data) {
  const commStart = 25;
  const commEnd = 63;

  var looper = 0;
  var answers = fs.readFileSync("ScoringKey/CommScoringKey.json");
  answers = JSON.parse(answers);

  var comScore = 0;
  var counter = 1;

  for (let prop in data) {
    if (looper >= commStart && looper <= commEnd) {
      // console.log(looper - commStart);
      // console.log(counter + " " + prop + "");
      counter -= -1;

      comScore += parseInt(answers[looper - commStart][data[prop]]);
    }

    looper += 1;
  }

  const communication = { communicationScore: comScore };
  return communication;
};

module.exports = {
  leadershipSum: leadershipSum,
  communicationSum: communicationSum
};
