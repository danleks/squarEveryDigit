const squarEveryDigit = (num) => {
    if (typeof num !== 'number') return false;

    const numArr = num.toString().split('');
    return parseInt(numArr.map(digit => parseInt(digit) * parseInt(digit)).join(''));
};

module.exports = squarEveryDigit;