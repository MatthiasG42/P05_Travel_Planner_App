import { checkForURL } from "../src/client/js/URLChecker"

test('to check that a variable is not undefined', () => {
    expect(checkForURL).toBeDefined();
  });