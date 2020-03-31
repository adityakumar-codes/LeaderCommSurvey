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
  /* 
*
sclarity of communication: 1+ 4+6+8+19+23+26+27+32+38
Ability to get feedback: 2+13+16+20+21+22+24+25+37+40
handle emotions: 3+7+11+12+14+15+17+18+28+36
listening skills: 5+9+10+29+30+31+33+34+35+39
Above Average: 20-30
Average: 10-20
Below Average: 0-10   
*
*/
  const clarity_of_communication = [0, 3, 5, 7, 18, 22, 25, 26, 32, 37];
  const ability_feedback = [1, 12, 15, 19, 20, 21, 23, 24, 36, 39];
  const handle_emotions = [2, 6, 10, 11, 13, 14, 16, 17, 27, 35];

  const commStart = 25;
  const commEnd = 64;

  var coc = 0;
  var af = 0;
  var he = 0;
  var ls = 0;
  var looper = 0;

  var answers = fs.readFileSync("ScoringKey/CommScoringKey.json");
  answers = JSON.parse(answers);

  var comScore = 0;

  for (let prop in data) {
    if (looper >= commStart && looper <= commEnd) {
      if (clarity_of_communication.indexOf(looper - commStart) != -1)
        coc += parseInt(answers[looper - commStart][data[prop]]);
      else if (ability_feedback.indexOf(looper - commStart) != -1)
        af += parseInt(answers[looper - commStart][data[prop]]);
      else if (handle_emotions.indexOf(looper - commStart) != -1)
        he += parseInt(answers[looper - commStart][data[prop]]);
      else ls += parseInt(answers[looper - commStart][data[prop]]);

      comScore += parseInt(answers[looper - commStart][data[prop]]);
    }

    looper += 1;
  }

  const communication = {
    "clarity of communication": coc,
    "Ability to get feedback": af,
    "handle emotions": he,
    "listening skills": ls
  };
  /*
  *
Above Average: 20-30
Average: 10-20
Below Average: 0-10
*
*/

  for (prop in communication)
    if (communication[prop] >= 20 && communication <= 30)
      communication[prop] = "Above Average";
    else if (communication[prop] >= 10 && communication[prop] <= 20)
      communication[prop] = "Average";
    else communication[prop] = "Below Average";

  return communication;
};

module.exports = {
  leadershipSum: leadershipSum,
  communicationSum: communicationSum
};
