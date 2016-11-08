var rand = require('./rand');
var usd = require('./usd');

module.exports.result = 'Account balance: \n';
module.exports.convert = usd(rand(100, 1000000));
