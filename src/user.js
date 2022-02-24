class User {
  constructor(userObject) {
    this.id = userObject.id;
    this.name = userObject.name;
    this.address = userObject.address;
    this.email = userObject.email;
    this.strideLength = userObject.strideLength;
    this.dailyStepGoal = userObject.dailyStepGoal;
    this.friends = userObject.friends;
  }

  firstName() {
    let fullName = this.name;
    if (fullName === '') {
      return "Sorry, this user has no name!"
    } else {
    let splitName = fullName.split(" ");
    return splitName[0];
  }
}
}

export default User;
