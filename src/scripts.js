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
const qualityLatestWeek = document.getElementById("qualityLatestWeek")
const allTimeAvgSleepQuality = document.getElementById("allTimeAvgSleepQuality");
const allTimeAvgHrsSlept = document.getElementById("allTimeAvgHrsSlept");

let userRepo;
let hydroRepo;
let sleepRepo;

Promise.all([users, hydration, sleep]).then((data) => {
  // console.log(data)
  userRepo = new UserRepository(data[0].userData);
  displayUserStepGoals(3);
  displayUserInfo(3);
  hydroRepo = new HydrationRepository(data[1].hydrationData);
  displayHydrationInfo(3);
  sleepRepo = new SleepRepository(data[2].sleepData);
  displaySleepInfo(3);

});

function displayUserInfo(userId){
  const user = userRepo.userInfo[userId-1];
  // console.log(user)

  userName.innerText = `Welcome ${user.firstName()}`;
  email.innerText = `${user.email}`;

  user.friends.forEach(friend =>{
    friendsList.innerHTML += `<p>${userRepo.displayUserData(friend).name}</p>`
  })

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
  const firstUser = userRepo.userInfo[userId-1];
  // console.log(firstUser)


  stepGoal.innerText = `Step Goal: ${firstUser.dailyStepGoal}`;

  avgStepGoal.innerText = `Average Step Goal: ${userRepo.calculateAvgStepGoal()}`;
}

function displaySleepInfo(userId, date) {
  // const sleepUser = sleepRepo.sleepData.[userId-1];
  // console.log(sleepRepo.sleepData.length - 1)
  const latestDay = sleepRepo.sleepData.length - 1;
  const findUser = sleepRepo.sleepData.filter(id => id.userID === userId);
  const userLatestDay = findUser.length - 1;
  const userStartDay = userLatestDay - 6;
  // console.log(findUser[userStartDay].date)
  // let startDay = latestDay -= 350;
  // console.log(startDay)
  const hrsSleptLatestDay = sleepRepo.hoursSleptPerDay(userId, sleepRepo.sleepData[latestDay].date)
  const qualityLatestDay = sleepRepo.sleepQualityPerDay(userId, sleepRepo.sleepData[latestDay].date)
  //look at this later
  const hrsSleptLatestWeek = sleepRepo.timeForWeek(userId, sleepRepo.sleepData[userStartDay].date)

  const sleepQualityLatestWeek = sleepRepo.qualityForWeek(userId, sleepRepo.sleepData[userStartDay].date)
  // console.log(sleepRepo.sleepQualityPerDay(userId, sleepRepo.sleepData[latestDay].date))
  console.log(qualityLatestWeek)

  const allSleepQualityAvg = sleepRepo.avgQualityAll();
  console.log(allSleepQualityAvg)

  const allTimeSleptAvg = sleepRepo.avgHoursAll();
  console.log(allTimeSleptAvg)
  sleepLatestDay.innerText = `Latest Day: Hours Slept ${hrsSleptLatestDay} Sleep Quality ${qualityLatestDay}`
  hrsSleptLatestWeek.forEach(day => {
    hoursLatestWeek.innerHTML += `<p class="pTag">${day}</p>`
  })

  sleepQualityLatestWeek.forEach(day => {
    qualityLatestWeek.innerHTML += `<p class="pTag">${day}</p>`
  })

  allTimeAvgSleepQuality.innerText = `All-Time Average Sleep Quality: ${allSleepQualityAvg}`
  allTimeAvgHrsSlept.innerText = `All-Time Average Hours Slept: ${allTimeSleptAvg}`
}
