import { expect } from "chai";
import HydrationRepository from "../src/HydrationRepository"
import UserRepository from "../src/UserRepository";
import User from '../src/user';
import { users, hydration } from '../src/apiCalls'
//let userRepo = new UserRepository(userData);

Promise.all([users, hydration]).then(data => {
  userRepo = new UserRepository(data[0].userData)
  hydrationRepo = new HydrationRepository(data[1].hydrationData)
  displayUserStepGoals(3);
  describe('Hydration', () => {

    // const hydration = new Hydration
    it('should be a function', function () {
      expect(Hydration).to.be.a('function');
    });

    it('should hold the id of the user passed in as an object', function () {
      expect(newUser.id).to.equal(1);
    });
  })

});
