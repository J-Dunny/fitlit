import userData from "../src/data/users";

class Activity {
  constructor(activityInfo) {
    this.activityData = activityInfo;
  }

  findUser(userId) {
    if (!this.activityData.map((data) => data.userID).includes(userId)) {
      return "User does not exist";
    }
    return this.activityData.filter((id) => id.userID === userId);
  }

  milesPerDay(userId, date) {
    let findUser = this.findUser(userId);
    let numberSteps = findUser.find((user) => {
      if (user.date === date) {
        return user;
      }
    }).numSteps;
    let miles = numberSteps / 2000;

    return Math.round(miles * 100) / 100;
  }

  activeMinutesDay(userId, date) {
    let findUser = this.findUser(userId);
    let minsActivity = findUser.find((user) => {
      if (user.date === date) {
        return user;
      }
    }).minutesActive;

    return minsActivity;
  }

  activeMinutesWeek(userId, startDate) {
    let findUser = this.findUser(userId);
    const index = findUser.findIndex((data) => data.date === startDate);

    const activeWeek = findUser
      .slice(index, index + 7)
      .map((data) => data.minutesActive);
    const sum = activeWeek.reduce((a, b) => {
      a += b;
      return a;
    }, 0);

    return sum;
  }

  //////
  // eachDayWeek0z(userId) {
  //   const userHydroData = this.findUser(userId)
  //   const lastElement = userHydroData.indexOf(
  //     userHydroData[userHydroData.length - 1]
  //   );
  //   const weekData = userHydroData.slice(lastElement - 6);

  //   return weekData.map((data) => data.numOunces);
  // }
  /////

  activityFlightsWeek(userId) {
    const userFlightsData = this.findUser(userId);
    const lastElement = userFlightsData.indexOf(
      userFlightsData[userFlightsData.length - 1]
    );
    const weekData = userFlightsData.slice(lastElement - 6);

    return weekData.map((data) => data.flightsOfStairs);
  }

  activityStepsForWeek(userId) {
    const userData = this.findUser(userId);
    const lastElement = userData.indexOf(userData[userData.length - 1]);
    const weekData = userData.slice(lastElement - 6);
    return weekData.map((data) => data.numSteps);
  }

  activityMinsForWeek(userId) {
    const userData = this.findUser(userId);
    const lastElement = userData.indexOf(userData[userData.length - 1]);
    const weekData = userData.slice(lastElement - 6);
    return weekData.map((data) => data.minutesActive);
  }

  hitDailyStepGoal(userId, date) {
    let findUser = this.findUser(userId);
    let user = userData.find((user) => {
      if (user.id === userId) {
        return user;
      }
    });
    let stepsDay = findUser.find((user) => {
      if (user.date === date) {
        return user;
      }
    }).numSteps;
    if (user.dailyStepGoal <= stepsDay) {
      return true;
    } else return false;
  }

  allDaysStepGoal(userId) {
    let findUser = this.findUser(userId);
    let user = userData.find((user) => {
      if (user.id === userId) {
        return user;
      }
    });
    let week = findUser.reduce((a, b) => {
      if (b.numSteps >= user.dailyStepGoal) {
        a.push(b.date);
      }
      return a;
    }, []);
    return week;
  }

  stairClimbRecord(userId) {
    let findUser = this.findUser(userId);
    let stairs = findUser
      .map((user) => {
        return user.flightsOfStairs;
      })
      .sort((a, b) => {
        return b - a;
      });
    return stairs.shift();
  }

  allUserAvgStairs(date) {
    let allStairs = this.activityData.reduce((a, b) => {
      if (b.date === date) {
        a.push(b.flightsOfStairs);
      }
      return a;
    }, []);
    let allStairsSum = allStairs.reduce((a, b) => {
      a += b;
      return a;
    }, 0);
    let avgStairs = allStairsSum / allStairs.length;
    return Math.round(avgStairs * 100) / 100;
  }

  allUserAvgSteps(date) {
    let allSteps = this.activityData.reduce((a, b) => {
      if (b.date === date) {
        a.push(b.numSteps);
      }
      return a;
    }, []);
    let allStepsSum = allSteps.reduce((a, b) => {
      a += b;
      return a;
    }, 0);
    let avgSteps = allStepsSum / allSteps.length;
    return Math.round(avgSteps * 100) / 100;
  }

  allUserAvgminutes(date) {
    let allMins = this.activityData.reduce((a, b) => {
      if (b.date === date) {
        a.push(b.minutesActive);
      }
      return a;
    }, []);

    let allMinsSum = allMins.reduce((a, b) => {
      a += b;
      return a;
    }, 0);
    let avgMins = allMinsSum / allMins.length;
    return Math.round(avgMins * 100) / 100;
  }

  findLatestDaySteps(userId) {
    const findUser = this.findUser(userId);
    const userData = findUser.map((data) => data.numSteps);
    return userData[userData.length - 1];
  }

  findLatestDayActiveMins(userId) {
    const findUser = this.findUser(userId);
    const userData = findUser.map((data) => data.minutesActive);
    return userData[userData.length - 1];
  }

  findLatestDay(userId) {
    const findUser = this.findUser(userId);
    const userData = findUser.map((data) => data.date);
    return userData[userData.length - 1];
  }
}

export default Activity;
