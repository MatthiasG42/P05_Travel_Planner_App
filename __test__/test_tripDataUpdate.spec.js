//check the tripUpdate function for correctness

const requestPost = require('../src/client/js/tripDataUpdate.js')
const function_tripUpdate = requestPost.tripUpdate

describe('tripUpdate from tripDataUpdate should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof function_tripUpdate).toBe("function");
    });
})
