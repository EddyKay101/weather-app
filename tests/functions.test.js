const fn = require('../src/components/utilities/functions');

describe("toCelsius", () => {
    test('should convert temperature from Farenheit to celcius', () => {
        let tempFarenheit = 87
        expect(fn.toCelsius(tempFarenheit)).toEqual(1);
    });
});