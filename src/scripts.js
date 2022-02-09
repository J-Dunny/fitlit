// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';
import UserRepository from './UserRepository';

const userName = document.getElementById("userName");
const stepGoal = document.getElementById("stepGoal");
const avgStepGoal = document.getElementById("avgStepGoal")

console.log(userData,"<>>>>userData")
const userRepo = new UserRepository(userData);
console.log(userRepo)

const firstUser = userRepo.userData[0]
console.log(firstUser)
// An example of how you tell webpack to use a CSS file

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
