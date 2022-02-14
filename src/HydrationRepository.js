class HydrationRepository {
  constructor(hydrationInfo) {
    this.hydrationData = hydrationInfo;
  }
  avgPerDayOz(userId) {
    const findUser = this.hydrationData.filter((id) => id.userID === userId);
    const totalOz = findUser
      .map((userOz) => userOz.numOunces)
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    return Math.round(totalOz / findUser.length);
  }

  specificDayOz(userId, date) {
    const findDate = this.hydrationData.find((user) => {
      if (user.date === date && user.userID === userId) {
        return user.numOunces;
      }
    });

    return findDate.numOunces;
  }

  eachDayWeek0z(userId) {
    const userHydroData = this.hydrationData.filter(
      (id) => id.userID === userId
    );
    const lastElement = userHydroData.indexOf(
      userHydroData[userHydroData.length - 1]
    );
    const weekData = userHydroData.slice(lastElement - 6);

    return weekData.map((data) => data.numOunces);
  }

  datesWeek(userId) {
    const userHydroData = this.hydrationData.filter(
      (id) => id.userID === userId
    );
    const lastElement = userHydroData.indexOf(
      userHydroData[userHydroData.length - 1]
    );
    const weekData = userHydroData.slice(lastElement - 6);
    
    return weekData.map((data) => data.date);
  }
}

export default HydrationRepository;
