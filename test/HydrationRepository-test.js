import { expect } from "chai";
import HydrationRepository '../src/HydrationRepository'
import UserRepository from "../src/UserRepository";
import User from '../src/user';
import hydration from './apiCalls.js'
//let userRepo = new UserRepository(userData);
Promise.all([hydration]).then(data => console.log(data));
    //hydrationRepository = hydration.hydrationData
    //displayUserStepGoals(3);

//});

describe('Hydration', () => {

  const hydration = new Hydration
  it('should be a function', function () {
    expect(Hydration).to.be.a('function');
  });

  it('should hold the id of the user passed in as an object', function () {
    expect(newUser.id).to.equal(1);
  });
})
