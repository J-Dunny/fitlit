import User from "../src/user";
class UserRepository {
  constructor(userData) {
    this.userData = userData.map((user) => new User(user));
  }

  displayUserData(userID) {
    let userInfo = this.userData.find((user) => user.id === userID);
    return userInfo;
  }

  calculateAvgStepGoal() {
    let stepGoals = this.userData.map((stepGoal) => stepGoal.dailyStepGoal);

    let addGoals = stepGoals.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    return addGoals / this.userData.length;
  }
}

export default UserRepository;
