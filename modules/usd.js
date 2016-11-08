// converts number to a string in USD format
function usd (value) {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

module.exports = usd;
