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
    let miles = findUser.find(user => {
      if(user.date === date) {
        return user
      }
    }).numSteps
    let milesForDay = miles/2000

    return Math.round(milesForDay * 100)/100
  }
}

export default Activity;
