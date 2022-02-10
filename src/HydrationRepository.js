class HydrationRepository {
  constructor(hydrationInfo) {
    this.hydrationData = hydrationInfo;
  }
  avgPerDayOz(userId) {
    const findUser = this.hydrationData.filter(id => id.userID === userId);
    const totalOz = findUser.map(userOz => userOz.numOunces).reduce((previousValue, currentValue) => previousValue + currentValue);
    return Math.round(totalOz/findUser.length);
  }

  specificDayOz(userId, date) {
    const findDate = this.hydrationData.find(user => {
      if (user.date === date && user.userID === userId) {
        return user.numOunces;
      }});

    return findDate.numOunces;
  }

  eachDayWeek0z(userId, startDate) {
    const findUser = this.hydrationData.filter(id => id.userID === userId);

    const x;

    for(var i = 0; i < 7, i++) {
      x = findUser.indexOf(findUser[i].date === startDate);
      return x
    }
    console.log(x)
  }

}
export default HydrationRepository
