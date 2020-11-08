import { checkForURL } from "../src/client/js/URLChecker"

describe('Test the fucntion to check for a correct URL', () => {
  
  // Test for the definition of the variable
  test('to check that a variable is not undefined', () => {
      expect(checkForURL).toBeDefined();
    });
  
  // Test for one positive outcome of the URL check
  var correctURL = "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011"
  test('This URL should result in true', () => {
    const response = checkForURL(correctURL);
    expect(response).toBeDefined();
    expect(response).toBe(true);
  });

  // Test for one negative outcome of the URL check
  var wrongURL = "testing"
  test('This URL should result in false', () => {
    const response = checkForURL(wrongURL);
    expect(response).toBeDefined();
    expect(response).toBe(false);
  });

});