//ReferenceError: regeneratorRuntime is not defined,
//Solution: add babel-polyfill
import "babel-polyfill";

//using supertest
//reference https://www.freecodecamp.org/news/end-point-testing/
//reference https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6

import { app } from '../src/server/index' // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

it("gets the test endpoint", async done => {
    const response = await request.get("/test");
  
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
    done();
  });
  
 