// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("184.64.193.119", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Return coordinates:", coordinates);
// });


// const testCoords = { latitude: '51.0486151', longitude: '-114.0708459' };

// fetchISSFlyOverTimes(testCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:', passTimes);
// });

const printPassTimes = (passTimes) => {
  for (let time of passTimes) {
    let dateAndTime = new Date(0);
    dateAndTime.setUTCSeconds(time.risetime);
    let duration = time.duration;
    console.log(`Next pass at ${dateAndTime} for ${duration} seconds`);
  }
};


// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   printPassTimes(passTimes);
// });

// printPassTimes([
//   { risetime: 1686396694, duration: 503 },
//   { risetime: 1686433094, duration: 217 },
//   { risetime: 1686469494, duration: 461 },
//   { risetime: 1686505894, duration: 650 },
//   { risetime: 1686542294, duration: 182 }
// ]);

module.exports = { printPassTimes };