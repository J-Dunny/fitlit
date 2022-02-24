import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import userData from "../src/data/users";
import User from "../src/User";

let userRepo = new UserRepository();
userRepo.loadUserInfo(userData)

describe("User Repository", () => {
  it("should be a function", function () {
    expect(UserRepository).to.be.a("function");
  });

  it("should store user objects", function () {
    expect(userRepo.userInfo[0]).to.be.an.instanceof(User);
  });

  it("should display user data", function () {
    expect(userRepo.displayUserData(1)).to.deep.equal(userRepo.userInfo[0]);
  });

  it("should return error message if user does not exist", function () {
    expect(userRepo.displayUserData(53)).to.equal("User does not exist");
  });

  it("should calculate the average step goal", function () {
    expect(userRepo.calculateAvgStepGoal()).to.deep.equal(6700);
  });

});
