import "./css/styles.css";
import "./images/turing-logo.png";
import { users, hydration } from "./apiCalls";
import UserRepository from "./UserRepository";
import HydrationRepository from "./HydrationRepository";
const userName = document.getElementById("userName");
const stepGoal = document.getElementById("stepGoal");
const avgStepGoal = document.getElementById("avgStepGoal");
const ouncesToday = document.getElementById("ouncesToday");
const ouncesWeek = document.getElementById("ouncesWeek");
const ouncesPerDayWeek = document.getElementById("ouncesPerDayWeek");
const friendsList = document.getElementById("friendsList");
const email = document.getElementById("email");

let userRepo;
let hydroRepo;

Promise.all([users, hydration]).then((data) => {
  userRepo = new UserRepository(data[0].userData);
  displayUserStepGoals(3);
  displayUserInfo(3);
  hydroRepo = new HydrationRepository(data[1].hydrationData);
  displayHydrationInfo(3);
});

function displayUserInfo(userId){
  const user = userRepo.userInfo[userId];
  console.log(user)

  userName.innerText = `Welcome ${user.firstName()}`;
  email.innerText = `${user.email}`;

  user.friends.forEach(friend =>{
    friendsList.innerHTML += `<p>${userRepo.displayUserData(friend).name}</p>`
  })
  console.log(userRepo.displayUserData(userId).name)


  // friendsList.innerHTML
}

function displayHydrationInfo(userId) {
  ouncesToday.innerText = `${hydroRepo.specificDayOz(userId, "2020/01/16")}oz today`;
  let hydroWeek = hydroRepo.eachDayWeek0z(userId);

  hydroWeek.forEach((day) => {
    ouncesPerDayWeek.innerHTML += `<p class="pTag">${day}oz</p>`;
  });
}
function displayUserStepGoals(userId) {
  const firstUser = userRepo.userInfo[userId];

  

  stepGoal.innerText = `Step Goal: ${firstUser.dailyStepGoal}`;

  avgStepGoal.innerText = `Average Step Goal: ${userRepo.calculateAvgStepGoal()}`;
}
