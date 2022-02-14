import "./css/styles.css";
import "./images/turing-logo.png";
import { users, hydration, sleep } from "./apiCalls";
import UserRepository from "./UserRepository";
import HydrationRepository from "./HydrationRepository";
import SleepRepository from "./SleepRepository";

const userName = document.getElementById("userName");
const stepGoal = document.getElementById("stepGoal");
const avgStepGoal = document.getElementById("avgStepGoal");
const ouncesToday = document.getElementById("ouncesToday");
const ouncesWeek = document.getElementById("ouncesWeek");
const ouncesPerDayWeek = document.getElementById("ouncesPerDayWeek");
const friendsList = document.getElementById("friendsList");
const email = document.getElementById("email");
const sleepLatestDay = document.getElementById("sleepLatestDay");
const hoursLatestWeek = document.getElementById("hoursLatestWeek");
const qualityLatestWeek = document.getElementById("qualityLatestWeek");
const allTimeAvgSleepQuality = document.getElementById(
  "allTimeAvgSleepQuality"
);
const allTimeAvgHrsSlept = document.getElementById("allTimeAvgHrsSlept");

let userRepo;
let hydroRepo;
let sleepRepo;

Promise.all([users, hydration, sleep]).then((data) => {
  userRepo = new UserRepository(data[0].userData);
  displayUserStepGoals(15);
  displayUserInfo(15);
  hydroRepo = new HydrationRepository(data[1].hydrationData);
  displayHydrationInfo(15);
  sleepRepo = new SleepRepository(data[2].sleepData);
  displaySleepInfo(15);
});

function displayUserInfo(userId) {
  const user = userRepo.userInfo[userId - 1];

  userName.innerHTML = `<p>Welcome</p>
                        <p>${user.firstName()}</p>`;
  email.innerText = `${user.email}`;
  user.friends.forEach((friend) => {
    friendsList.innerHTML += `<p>${userRepo.displayUserData(friend).name}</p>`;
  });
}

function displayHydrationInfo(userId) {
  ouncesToday.innerHTML = `<p>Today: <b>${hydroRepo.specificDayOz(
    userId,
    "2020/01/16"
  )}oz</b></p>`;
  let hydroWeek = hydroRepo.eachDayWeek0z(userId);

  hydroWeek.forEach((day) => {
    ouncesPerDayWeek.innerHTML += `<p class="pTag"><b>${day}oz</b></p>`;
  });
}

function displayUserStepGoals(userId) {
  const firstUser = userRepo.userInfo[userId - 1];

  stepGoal.innerHTML = `<p>Step Goal: <b>${firstUser.dailyStepGoal}</b></p>`;

  avgStepGoal.innerHTML = `<p>Average Step Goal: <b>${userRepo.calculateAvgStepGoal()}</b></p>`;
}

function displaySleepInfo(userId) {
  const latestDay = sleepRepo.sleepData.length - 1;
  const findUser = sleepRepo.sleepData.filter((id) => id.userID === userId);
  const userLatestDay = findUser.length - 1;
  const userStartDay = userLatestDay - 6;
  const hrsSleptLatestDay = sleepRepo.hoursSleptPerDay(
    userId,
    sleepRepo.sleepData[latestDay].date
  );
  const qualityLatestDay = sleepRepo.sleepQualityPerDay(
    userId,
    sleepRepo.sleepData[latestDay].date
  );
  const hrsSleptLatestWeek = sleepRepo.timeForWeek(
    userId,
    sleepRepo.sleepData[userStartDay].date
  );
  const sleepQualityLatestWeek = sleepRepo.qualityForWeek(
    userId,
    sleepRepo.sleepData[userStartDay].date
  );
  const allSleepQualityAvg = sleepRepo.avgQualityAll();
  const allTimeSleptAvg = sleepRepo.avgHoursAll();

  sleepLatestDay.innerHTML = `<p>Hours: <b>${hrsSleptLatestDay}</b> Quality: <b>${qualityLatestDay}</b></p>`;
  hrsSleptLatestWeek.forEach((day) => {
    hoursLatestWeek.innerHTML += `<p class="pTag"><b>${day}</b></p>`;
  });

  sleepQualityLatestWeek.forEach((day) => {
    qualityLatestWeek.innerHTML += `<p class="pTag"><b>${day}</b></p>`;
  });

  allTimeAvgSleepQuality.innerHTML = `<p>Average Quality: <b>${allSleepQualityAvg}</b></p>`;
  allTimeAvgHrsSlept.innerHTML = `<p>Average Hours: <b>${allTimeSleptAvg}</b></p>`;
}
