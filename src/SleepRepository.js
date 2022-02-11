class SleepRepository {
    constructor(sleepData) {
        this.sleepData = sleepData;
    }

    avgPerDay(userId) {
        const findUser = this.sleepData.filter(id => id.userID === userId);
        const totalSleep = findUser.map(sleep => sleep.hoursSlept).reduce((previousValue, currentValue) => previousValue + currentValue);

        let avgSleep = totalSleep / findUser.length;
        return Math.round(avgSleep * 10) / 10
    }

    sleepQualityPerDay(userId, date) {
        const findUser = this.sleepData.filter(id => id.userID === userId);
        let sleep = findUser.find(day => day.date === date).sleepQuality
        return Math.round(sleep * 10) / 10
    }

    avgTimePerWeek(userId, startDate) {
        const userSleepData = this.sleepData.filter(id => id.userID === userId);

        const index = userSleepData.findIndex(data => data.date === startDate);

        let i = index;

        const weekData = userSleepData.slice(i, i + 7).map(data => data.hoursSlept).reduce((previousValue, currentValue) => previousValue + currentValue);

        return Math.round((weekData / 7) * 10) / 10

    }

    avgQualityPerWeek(userId, startDate) {
        const userSleepData = this.sleepData.filter(id => id.userID === userId);

        const index = userSleepData.findIndex(data => data.date === startDate);

        let i = index;

        const weekData = userSleepData.slice(i, i + 7).map(data => data.sleepQuality).reduce((previousValue, currentValue) => previousValue + currentValue);

        return Math.round((weekData / 7) * 10) / 10
    }

    avgSleepAll() {
        let sleep = this.sleepData.map(sleep => sleep.sleepQuality);

        let addSleep = sleep.reduce(
            (previousValue, currentValue) => previousValue + currentValue
        );
        console.log(this.sleepData.length)
        return Math.round((addSleep / this.sleepData.length) * 10) / 10
        
    }


}

export default SleepRepository



