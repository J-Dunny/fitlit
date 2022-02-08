import userData from "./data/users"


class UserRepository {
  //hold onto all user objects
  //parameter to pass user Data

  constructor(userData) {
    this.userData = userData;
    //this.users = []
  }

  //createUsers() {
  // this.users = userData.map(user => new User(user.id,
  //     user.name, user.address, user.email, user.strideLength,
  //     user.dailyStepGoal, user.friends))
  // }
  //2 methods
  //what is user data passing in // ID

  displayUserData(userID) {
    //  const users = this.userData
    // let userInfo = users.find(user => user.id === userID )
     //console.log(userData)

    let userInfo = this.userData.find(user => user.id === userID);
    return userInfo;
  }

  //average step goal among all users
  calculateAvgStepGoal() {}
}

export default UserRepository;

//let cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer))
