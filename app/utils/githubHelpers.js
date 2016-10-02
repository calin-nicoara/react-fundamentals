var axios = require('axios');

var id = 'calin12';
var sec = '8b942c5dc7d28b8b2b566ed7c362b2cb9e2f3818';
var param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
       return info.map(function (user) {
         return user.data;
       })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo', err);
    })
  }
};

module.exports = helpers;