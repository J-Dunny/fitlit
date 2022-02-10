import './css/styles.css';
import './images/turing-logo.png';
import {users, hydration} from './apiCalls'
import UserRepository from './UserRepository';
import HydrationRepository from './HydrationRepository';

const userName = document.getElementById("userName");
const stepGoal = document.getElementById("stepGoal");
const avgStepGoal = document.getElementById("avgStepGoal");

let userRepo;

Promise.all([users, hydration]).then(data => console.log(data))
// then(data => {
//     userRepo = new UserRepository(data[0].userData)
//     hydrationRepo = new HydrationRepository(data[1].hydrationData)
//     displayUserStepGoals(3);
//
// });

function displayUserStepGoals(userId){
    const firstUser = userRepo.userInfo[userId];

    userName.innerText = `Welcome ${firstUser.firstName()}`;

    stepGoal.innerText = `Step Goal: ${firstUser.dailyStepGoal}`;

    avgStepGoal.innerText = `Average Step Goal: ${userRepo.calculateAvgStepGoal()}`;
}
