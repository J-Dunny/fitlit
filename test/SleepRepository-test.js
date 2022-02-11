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

    it('For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week', function () {
        expect(sleepRepo.avgTimePerWeek(1, "2019/06/15")).to.equal(8.1);
    });

    it('For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week', function () {
        expect(sleepRepo.avgQualityPerWeek(1, "2019/06/15")).to.equal(2.6);
    });

    it('For all users, the average sleep quality', function () {
        expect(sleepRepo.avgSleepAll()).to.equal(3);
    });

})