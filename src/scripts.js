import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';
import UserRepository from './UserRepository';

const userName = document.getElementById("userName");
const stepGoal = document.getElementById("stepGoal");
const avgStepGoal = document.getElementById("avgStepGoal");

const userRepo = new UserRepository(userData);
const firstUser = userRepo.userData[0]

userName.innerText = `Welcome ${firstUser.firstName()}`;

stepGoal.innerText = `Step Goal: ${firstUser.dailyStepGoal}`;

avgStepGoal.innerText = `Average Step Goal: ${userRepo.calculateAvgStepGoal()}`;
