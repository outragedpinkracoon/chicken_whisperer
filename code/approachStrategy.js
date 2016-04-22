
class ApproachStrategy {
  constructor(options){
    this.approachDice = 2;
    this.die = options.die;
    this.whispererChecker = options.whispererChecker;
  }

  static get name(){
    return "key";
  }
  
  approachRoll(){
    return this.die.rollMultiple(this.approachDice);
  }
}

module.exports = ApproachStrategy;