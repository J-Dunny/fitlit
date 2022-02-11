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

})