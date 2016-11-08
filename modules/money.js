var rand = require('./rand');
var usd = require('./usd');

var convertedResult = function (){
    return usd(rand(100, 1000000));
};

module.exports.result = 'Account balance: \n';
module.exports.convert = convertedResult;
