class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  avgPerDay(userId) {
    const findUser = this.sleepData.filter((id) => id.userID === userId);
    const totalSleep = findUser
      .map((sleep) => sleep.hoursSlept)
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    let avgSleep = totalSleep / findUser.length;

    return Math.round(avgSleep * 10) / 10;
  }

  sleepQualityPerDay(userId, date) {
    const findUser = this.sleepData.filter((id) => id.userID === userId);
    let sleep = findUser.find((day) => day.date === date).sleepQuality;

    return Math.round(sleep * 10) / 10;
  }

  hoursSleptPerDay(userId, date) {
    const findUser = this.sleepData.filter((id) => id.userID === userId);
    let sleep = findUser.find((day) => day.date === date).hoursSlept;

    return Math.round(sleep * 10) / 10;
  }

  timeForWeek(userId, startDate) {
    const userSleepData = this.sleepData.filter((id) => id.userID === userId);
    const index = userSleepData.findIndex((data) => data.date === startDate);
    let i = index;

    const weekData = userSleepData
      .slice(i, i + 7)
      .map((data) => data.hoursSlept);

    return weekData;
  }

  qualityForWeek(userId, startDate) {
    const userSleepData = this.sleepData.filter((id) => id.userID === userId);
    const index = userSleepData.findIndex((data) => data.date === startDate);
    const weekData = userSleepData
      .slice(index, index + 7)
      .map((data) => data.sleepQuality);

    return weekData;
  }

  avgQualityAll() {
    let sleep = this.sleepData.map((sleep) => sleep.sleepQuality);
    let addSleep = sleep.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );

    return Math.round((addSleep / this.sleepData.length) * 10) / 10;
  }

  avgHoursAll() {
    let sleep = this.sleepData.map((sleep) => sleep.hoursSlept);
    let addSleep = sleep.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );

    return Math.round((addSleep / this.sleepData.length) * 10) / 10;
  }

  datesWeek(userId, startDate) {
    const userSleepData = this.sleepData.filter((id) => id.userID === userId);
    const index = userSleepData.findIndex((data) => data.date === startDate);
    const weekData = userSleepData
      .slice(index, index + 7)
      .map((data) => data.date);

    return weekData;
  }
}

export default SleepRepository;
