const { sum,fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("1 EUR should be 1.07 USD so 3.5 EUR must be equal 3.745 USD", function() {
    
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("1 USD must be equal 146.26 JPY ", function(){

    const yen = fromDollarToYen(1);
    const expected = (1/1.07) * 156.5;
    expect(fromDollarToYen(1)).toBe(146.26);

});

test("1 YEN must be equal 0.0056 GBP ", function(){

    const pound = fromYenToPound(1);
    const expected = (1/156.5) * 0.87;
    expect(fromYenToPound(1)).toBe(0.0056);
    
});
