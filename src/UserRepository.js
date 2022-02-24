import User from "../src/User";
class UserRepository {
  constructor(userInfo) {
    this.userInfo = userInfo.map((user) => new User(user));
  }

  displayUserData(userID) {
    let userInfo = this.userInfo.find((user) => user.id === userID);
    if(!userInfo) {
      return "User does not exist"
    }
    return userInfo;
  }

  calculateAvgStepGoal() {
    let stepGoals = this.userInfo.map((stepGoal) => stepGoal.dailyStepGoal);

    let addGoals = stepGoals.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    return addGoals / this.userInfo.length;
  }
}

export default UserRepository;
