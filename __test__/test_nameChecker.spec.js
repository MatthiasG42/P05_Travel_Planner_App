import { checkForName } from "../src/client/js/nameChecker"

test('to check that a variable is not undefined', () => {
    expect(checkForName).toBeDefined();
  });