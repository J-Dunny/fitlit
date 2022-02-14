import { expect } from "chai";
import HydrationRepository from "../src/HydrationRepository";
import UserRepository from "../src/UserRepository";
import userData from "../src/data/users";
import hydrationData from "../src/data/hydration";

let userRepo = new UserRepository(userData);

describe("Hydration Repository", () => {
  let hydroRepo = new HydrationRepository(hydrationData);

  it("should be a function", function () {
    expect(HydrationRepository).to.be.a("function");
  });

  it("should be a instance of HydrantionRepository", function () {
    expect(hydroRepo).to.be.an.instanceOf(HydrationRepository);
  });

  it("should have a method that returns avg fluid ounces consumed per day for all time", function () {
    expect(hydroRepo.avgPerDayOz(1)).to.equal(62);
  });

  it("should have a method that returns how many fluid ounces have been consumed for a specific day", function () {
    expect(hydroRepo.specificDayOz(1, "2019/06/15")).to.equal(37);
  });

  it("method that returns ounces consumed each day for 7 days", function () {
    expect(hydroRepo.eachDayWeek0z(1)).to.deep.equal([
      69,
      96,
      61,
      91,
      50,
      50,
      43,
    ]);
  });
});
