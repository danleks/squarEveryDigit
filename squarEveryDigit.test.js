const squarEveryDigit = require('./squarEveryDigit');

test('test for falsy value', () => {
    expect(squarEveryDigit('string')).toBeFalsy();
});

test('test for proper return value', ()=> {
    expect(squarEveryDigit(9119)).toBe(811181);
});