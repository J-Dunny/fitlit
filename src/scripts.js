import './css/styles.css';
import './images/turing-logo.png';
// import userData from './data/users';
// const users = new Users();
// fetch('https://fitlit-api.herokuapp.com/api/v1/users').then(responses => responses.json()).then(data => data.userData);
const users = Promise.resolve(fetch('https://fitlit-api.herokuapp.com/api/v1/users').then(responses => responses.json()).then(data => data.userData));
console.log(users)
import UserRepository from './UserRepository';

const userName = document.getElementById("userName");
const stepGoal = document.getElementById("stepGoal");
const avgStepGoal = document.getElementById("avgStepGoal");

const userRepo = new UserRepository(users);
// console.log(userRepo)
const firstUser = userRepo.userInfo[0];

userName.innerText = `Welcome ${firstUser.firstName()}`;

stepGoal.innerText = `Step Goal: ${firstUser.dailyStepGoal}`;

avgStepGoal.innerText = `Average Step Goal: ${userRepo.calculateAvgStepGoal()}`;
