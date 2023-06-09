const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {

    // error can be set if invalid domain, user is offline, etc.
    if (error) return callback(error, null);

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipwho.is/${ip}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const parsedBody = JSON.parse(body);

    if (!parsedBody.success) {
      callback(Error(`Success status was ${parsedBody.success}. The Server says ${parsedBody.message} when fetching for IP ${parsedBody.ip}`), null);
      return;
    };

    console.log('parsed body:', parsedBody);
    const { latitude, longitude } = parsedBody;
    // console.log('parsedBody type:', typeof parsedBody);
    callback(null, { latitude, longitude });
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP };