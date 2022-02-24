import { expect } from "chai";
import HydrationRepository from "../src/HydrationRepository";
import hydrationData from "../src/data/hydration";


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

  it("should return error message if user does not exist", function () {
    expect(hydroRepo.findUser(52)).to.equal("User does not exist");
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

  it("Method for returning the dates of displayed data", function () {
    expect(hydroRepo.datesWeek(1)).to.deep.equal([
      '2019/06/16',
      '2019/06/17',
      '2019/06/18',
      '2019/06/19',
      '2019/06/20',
      '2019/06/21',
      '2019/06/22'
    ]);
  });
});
