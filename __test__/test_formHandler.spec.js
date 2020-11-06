//ReferenceError: regeneratorRuntime is not defined,
//Solution: add babel-polyfill
import "babel-polyfill";

import { handleSubmit } from "../src/client/js/formHandler"

test('to check that a variable is not undefined', () => {
    expect(handleSubmit).toBeDefined();
  });