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

let userRepo;
let hydroRepo;

Promise.all([users, hydration]).then((data) => {
  userRepo = new UserRepository(data[0].userData);
  displayUserStepGoals(2);
  hydroRepo = new HydrationRepository(data[1].hydrationData);
  displayHydrationInfo(2);
});

function displayHydrationInfo(userId) {
  ouncesToday.innerText = `You have had ${hydroRepo.specificDayOz(userId, "2019/06/15")}oz today`;
  let hydroWeek = hydroRepo.eachDayWeek0z(userId, "2019/06/15", "2019/06/21");

  hydroWeek.forEach((day) => {
    ouncesPerDayWeek.innerHTML += `<p class="pTag">${day}</p>`;
  });
}
function displayUserStepGoals(userId) {
  const firstUser = userRepo.userInfo[userId];

  userName.innerText = `Welcome ${firstUser.firstName()}`;

  stepGoal.innerText = `Step Goal: ${firstUser.dailyStepGoal}`;

  avgStepGoal.innerText = `Average Step Goal: ${userRepo.calculateAvgStepGoal()}`;
}
