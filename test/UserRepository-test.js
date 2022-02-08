import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import userData from "../src/data/users"
import User from '../src/user';
let userRepo = new UserRepository(userData);
// let users = userData.map(user => new User(user.id,
//   user.name, user.address, user.email, user.strideLength,
//   user.dailyStepGoal, user.friends))

describe("User Repository", () => {
  it("should be a function", function () {
    expect(UserRepository).to.be.a("function");
  });

  it("should store user objects", function () {
    expect(userRepo.userData[0]).to.be.an.instanceof(User);
  });

  it("should display user data", function () {
    expect(userRepo.displayUserData(1)).to.deep.equal(userRepo.userData[0]);
  });

  it("should calculate the average step goal", function () {
    expect(userRepo.calculateAvgStepGoal()).to.deep.equal(6700);
  });
});
