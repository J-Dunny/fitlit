import userData from "../src/data/users"

class Activity {
  constructor(activityInfo) {
    this.activityData = activityInfo;
  }

  findUser(userId) {
    if (!this.activityData.map(data => data.userID).includes(userId)) {
      return "User does not exist"
    }
  return this.activityData.filter(id => id.userID === userId)
  }

  milesPerDay(userId, date) {
    let findUser = this.findUser(userId)
    let numberSteps = findUser.find(user => {
      if(user.date === date) {
        return user
      }
    }).numSteps
    let miles = numberSteps/2000

    return Math.round(miles * 100)/100
  }

  activeMinutesDay(userId, date) {
    let findUser = this.findUser(userId)
    let minsActivity = findUser.find(user => {
      if(user.date === date) {
        return user
      }
    }).minutesActive

    return minsActivity
  }

  activeMinutesWeek(userId, startDate) {
    let findUser = this.findUser(userId)
    const index = findUser.findIndex((data) => data.date === startDate)

    const activeWeek = findUser.slice(index, index + 7).map((data) => data.minutesActive)
    const sum = activeWeek.reduce((a, b) => {
      a += b;
      return a
    }, 0)

    return sum
  }

  hitDailyStepGoal(userId, date) {
    let findUser = this.findUser(userId)
    let user = userData.find(user => {
      if(user.id === userId) {
        return user
      }
    })

    let stepsDay = findUser.find(user => {
      if(user.date === date) {
        return user
      }
    }).numSteps

    if(user.dailyStepGoal <= stepsDay) {
      return true
    } else return false
  }

  allDaysStepGoal(userId) {
    let findUser = this.findUser(userId)
    let user = userData.find(user => {
      if(user.id === userId) {
        return user
      }
    })
  }
}

export default Activity;
