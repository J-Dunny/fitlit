import { expect } from "chai";
import sleepData from "../src/data/sleep";
import SleepRepository from "../src/SleepRepository";
// import HydrationRepository from '../src/HydrationRepository'
// import UserRepository from "../src/UserRepository";



describe('Sleep Repository', () => {

    let sleepRepo = new SleepRepository(sleepData)

    it('should be a function', function () {
        expect(SleepRepository).to.be.a('function');
    });

    it('should be a instance of SleepRepository', function () {
        expect(sleepRepo).to.be.an.instanceOf(SleepRepository);
    });

    it('should have a method identified by user for avg hours slept per day', function () {
        expect(sleepRepo.avgPerDay(1)).to.equal(7.9);
    });

    it('should have a method for a user/s sleep quality for a specific day (identified by a date)', function () {
        expect(sleepRepo.sleepQualityPerDay(1, "2019/06/15")).to.equal(2.2);
    });

    it('should have a method that returns how many hours slept on specific day (identified by a date)', function () {
        expect(sleepRepo.hoursSleptPerDay(1, "2019/06/15")).to.equal(6.1);
    });

    it('For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week', function () {
        expect(sleepRepo.timeForWeek(1, "2019/06/15")).to.deep.equal([ 6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8 ]);
    });

    it('For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week', function () {
        expect(sleepRepo.qualityForWeek(1, "2019/06/15")).to.deep.equal([ 2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2]);
    });

    it('For all users, the average sleep quality', function () {
        expect(sleepRepo.avgQualityAll()).to.equal(3);
    });

    it('For all users, the average hours slept', function () {
        expect(sleepRepo.avgHoursAll()).to.equal(7.8);
    });

})