import { expect } from "chai";
import Activity from "../src/Activity";
import activityData from "../src/data/hydration";

describe("Activity Repository", () => {
  let activity = new Activity(hydrationData);

  it("should be a function", function () {
    expect(Activity).to.be.a("function");
  });

  it("should be a instance of Activity", function () {
    expect(activity).to.be.an.instanceOf(Activity);
  });

  it("should have a method that returns miles walked in a specific day", function () {
    expect(activity.milesPerDay(date)).to.equal(11)
  })

  it("should have a method that returns how many active minutes in a given day", function () {
    expect(activity.activeMinutesDay(date).to.equal(37))
  })

  it("should have a method that returns how many active minutes in a given week", function () {
    expect(activity.activeMinutesWeek(date).to.equal(437))
  })

  it("should have a method that returns boolean if a user reached their step goal for the day", function () {
    expect(activity.hitDailyStepGoal(5000).to.equal(true))
    expect(activity.hitDailyStepGoal(1000).to.equal(false))
  })

  it("should have a method that finds all days where step goal was exceeded", function () {
    expect(activity.allDaysStepGoal().to.equal([date, date, date??]))
  })

  it("should have a method that finds step climbing record", function () {
    expect(activity.stairClimbRecord().to.equal(666))
  })

  it("should have a method that returns average number of stairs climbed for all users on a specific day", function () {
    expect(activity.allUserAvgStairs().to.equal(1300))
  })

  it("should have a method that returns average number of steps taken for all users on a specific day", function () {
    expect(activity.allUserAvgSteps().to.equal(5500))
  })

  it("should have a method that returns average number of minutes active on a specific", function () {
    expect(activity.allUserAvgminutes().to.equal(3300))
  })


})
