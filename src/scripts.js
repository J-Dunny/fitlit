import "./css/styles.css";
import "./images/turing-logo.png";
import {
  users,
  hydration,
  sleep,
  activity,
  addSleep,
  addHydration,
  addActivity,
} from "./apiCalls";
import UserRepository from "./UserRepository";
import HydrationRepository from "./HydrationRepository";
import SleepRepository from "./SleepRepository";
import Activity from "./Activity";

const userName = document.getElementById("userName");
const stepGoal = document.getElementById("stepGoal");
const avgStepGoal = document.getElementById("avgStepGoal");
const ouncesToday = document.getElementById("ouncesToday");
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
const errorMsg = document.querySelector(".title");
const week = document.getElementById("week");
const sleepDates = document.getElementById("sleepDates");
const stepsLatestDay = document.getElementById("stepsLatestDay");
const numMinutesActive = document.getElementById("numMinutesActive");
const milesWalkedLatestDay = document.getElementById("milesWalkedLatestDay");
const avgActivityAllUsers = document.getElementById("avgActivityAllUsers");
const stepsLatestWeek = document.getElementById("stepsLatestWeek");
const minsLatestWeek = document.getElementById("minsLatestWeek");
const flightsLatestWeek = document.getElementById("flightsLatestWeek");
const sleepForm = document.getElementById("sleepForm");
const sleepDateInput = document.getElementById("sleepDateInput");
const sleepHoursInput = document.getElementById("sleepHoursInput");
const sleepQualityInput = document.getElementById("sleepQualityInput");
const errorTag = document.getElementById("errorTag");
const hydrationDateInput = document.getElementById("hydrationDateInput");
const ouncesInput = document.getElementById("ouncesInput");
const hydrationForm = document.getElementById("hydrationForm");
const activityDateInput = document.getElementById("activityDateInput");
const flightsInput = document.getElementById("flightsInput");
const minutesActiveInput = document.getElementById("minutesActiveInput");
const stepsInput = document.getElementById("stepsInput");
const activityForm = document.getElementById("activityForm");

let userRepo;
let hydroRepo;
let sleepRepo;
let activityRepo;
const user = 1;

window.onload = (event) => {
  Promise.all([users, hydration, sleep, activity])
    .then((data) => {
      userRepo = new UserRepository();
      userRepo.loadUserInfo(data[0].userData);
      displayUserStepGoals(user);
      displayUserInfo(user);
      hydroRepo = new HydrationRepository(data[1].hydrationData);
      displayHydrationInfo(user);
      sleepRepo = new SleepRepository(data[2].sleepData);
      displaySleepInfo(user);
      activityRepo = new Activity(data[3].activityData);
      displayStepsLatestDay(user);
      displayActiveMinLatestDay(user);
      milesLatestDay(user);
      showAllUsersActivity(user);
      showActivityForWeek(user);
    })
    .catch((err) => console.log(err));
};

//event listener POST
sleepForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newSleep = {
    userID: user,
    date: sleepDateInput.value.replaceAll("-", "/"),
    hoursSlept: parseInt(sleepHoursInput.value),
    sleepQuality: parseInt(sleepQualityInput.value),
  };
  console.log(newSleep);
  addSleep(newSleep);
  e.target.reset();
});

hydrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newHydration = {
    userID: user,
    date: hydrationDateInput.value.replaceAll("-", "/"),
    numOunces: parseInt(ouncesInput.value),
  };
  console.log(newHydration);
  addHydration(newHydration);
  e.target.reset();
});

activityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newActivity = {
    userID: user,
    date: activityDateInput.value.replaceAll("-", "/"),
    numSteps: parseInt(stepsInput.value),
    minutesActive: parseInt(minutesActiveInput.value),
    flightsOfStairs: parseInt(flightsInput.value),
  };
  console.log(newActivity);
  addActivity(newActivity);
  e.target.reset();
});

function displayUserInfo(userId) {
  const user = userRepo.userInfo[userId - 1];
  userName.innerHTML = `<h1>Welcome</h1>
                        <h2 class="data-color user-name">${user.firstName()}</h2>`;
  email.innerText = `${user.email}`;
  user.friends.forEach((friend) => {
    friendsList.innerHTML += `<p>${userRepo.displayUserData(friend).name}</p>`;
  });
}

function displayHydrationInfo(userId) {
  ouncesToday.innerHTML = `<p>Today: <b class="data-color">${hydroRepo.specificDayOz(
    userId,
    "2020/01/16"
  )}oz</b></p>`;
  let hydroWeek = hydroRepo.eachDayWeek0z(userId);
  let daysWeek = hydroRepo.datesWeek(userId);

  daysWeek.forEach((date) => {
    week.innerHTML += `<p class="pTag week-font data-color"><b>${date}</b></p>`;
  });
  hydroWeek.forEach((day) => {
    ouncesPerDayWeek.innerHTML += `<p class="pTag"><b class="data-color">${day}oz</b></p>`;
  });
}

function displayUserStepGoals(userId) {
  const firstUser = userRepo.userInfo[userId - 1];

  stepGoal.innerHTML = `<p>Step Goal: <b class="data-color">${firstUser.dailyStepGoal}</b></p>`;

  avgStepGoal.innerHTML = `<p>Average Step Goal: <b class="data-color">${userRepo.calculateAvgStepGoal()}</b></p>`;
}

function displaySleepInfo(userId) {
  const latestDay = sleepRepo.sleepData.length - 1;
  const findUser = sleepRepo.sleepData.filter((id) => id.userID === userId);
  console.log("findUser", findUser);
  const userLatestDay = findUser.length - 1;
  console.log("userLatestDay", userLatestDay);
  const userStartDay = userLatestDay - 6;

  console.log("user last day", findUser[userLatestDay].date);
  console.log("user start date", findUser[userStartDay].date);

  const hrsSleptLatestDay = sleepRepo.hoursSleptPerDay(
    userId,
    findUser[userLatestDay].date
  );

  const qualityLatestDay = sleepRepo.sleepQualityPerDay(
    userId,
    findUser[userLatestDay].date
  );

  const hrsSleptLatestWeek = sleepRepo.timeForWeek(
    userId,
    findUser[userStartDay].date
  );
  const sleepQualityLatestWeek = sleepRepo.qualityForWeek(
    userId,
    findUser[userStartDay].date
  );

  const allSleepQualityAvg = sleepRepo.avgQualityAll();

  const allTimeSleptAvg = sleepRepo.avgHoursAll();

  let sleepDaysWeek = sleepRepo.datesWeek(userId, findUser[userStartDay].date);

  sleepDaysWeek.forEach((day) => {
    sleepDates.innerHTML += `<p class="pDate week-font data-color"><b>${day}</b></p>`;
  });

  sleepLatestDay.innerHTML = `<p>Hours: <b class="data-color">${hrsSleptLatestDay}</b> Quality: <b class="data-color">${qualityLatestDay}</b></p>`;
  hrsSleptLatestWeek.forEach((day) => {
    hoursLatestWeek.innerHTML += `<p class="pHrs"><b class="data-color">Hr-${day}</b></p>`;
  });

  sleepQualityLatestWeek.forEach((day) => {
    qualityLatestWeek.innerHTML += `<p class="pQuality"><b class="data-color">Q-${day}</b></p>`;
  });

  allTimeAvgSleepQuality.innerHTML = `<p>Average Quality: <b class="data-color">${allSleepQualityAvg}</b></p>`;
  allTimeAvgHrsSlept.innerHTML = `<p>Average Hours: <b class="data-color">${allTimeSleptAvg}</b></p>`;
}

function displayStepsLatestDay(userId) {
  stepsLatestDay.innerHTML = `<p>Steps today: <b class="data-color">${activityRepo.findLatestDaySteps(
    userId
  )}</b></p>`;
}

function displayActiveMinLatestDay(userId) {
  numMinutesActive.innerHTML = `<p>Active min today: <b class="data-color">${activityRepo.findLatestDayActiveMins(
    userId
  )}</b></p> `;
}

function milesLatestDay(userId) {
  milesWalkedLatestDay.innerHTML = `<p>Miles walked today: <b class="data-color">${activityRepo.milesPerDay(
    userId,
    activityRepo.findLatestDay(userId)
  )}</b></p>`;
}

function showAllUsersActivity(userId) {
  avgActivityAllUsers.innerHTML = `<p>Steps:<b class="data-color">${activityRepo.allUserAvgSteps(
    activityRepo.findLatestDay(userId)
  )}</b> Active Mins:<b class="data-color">${activityRepo.allUserAvgminutes(
    activityRepo.findLatestDay(userId)
  )}</b> Flights:<b class="data-color">${activityRepo.allUserAvgStairs(
    activityRepo.findLatestDay(userId)
  )}</b></p>`;
}

function showActivityForWeek(userId) {
  let stepsWeek = activityRepo.activityStepsForWeek(userId);

  stepsWeek.forEach((day) => {
    stepsLatestWeek.innerHTML += `<p class="pTag data-color"><b>${day}</b></p>`;
  });

  let minsWeek = activityRepo.activityMinsForWeek(userId);

  minsWeek.forEach((day) => {
    minsLatestWeek.innerHTML += `<p class="pTag data-color"><b>${day}</b></p>`;
  });

  let flightsWeek = activityRepo.activityFlightsWeek(userId);

  flightsWeek.forEach((day) => {
    flightsLatestWeek.innerHTML += `<p class="pTag data-color"><b>${day}</b></p>`;
  });
}
