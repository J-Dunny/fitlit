class SleepRepository{
    constructor(sleepData){
        this.sleepData = sleepData;
    }

    avgPerDay(userId) {
        const findUser = this.sleepData.filter(id => id.userID === userId);
        console.log(findUser)
        const totalSleep = findUser.map(sleep => sleep.hoursSlept).reduce((previousValue, currentValue) => previousValue + currentValue);

        let avgSleep = totalSleep/findUser.length;
        return Math.round(avgSleep * 10) / 10
      }

    sleepQualityPerDay(userId, date){
        // const findUser = this.sleepData.filter(id => id.userID === userId);
        // console.log(findUser)

    }

    avgTimePerWeek(userId, date){

    }

    avgQualityPerWeek(userId, date){

    }

    avgSleepAll(){

    }

    
}

export default SleepRepository