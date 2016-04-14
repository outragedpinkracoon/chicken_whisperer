require("babel-register");
var Chicken = require('../chicken.js');
var ChickenPen = require('../chickenPen.js');

class ChickenData {
  
  constructor(){

    var chickenOneOptions = {
      name: "Old Chicken",
      speed: 5,
      maxScare: 3
    }

    var chickenTwoOptions = {
      name: "Young Chicken",
      speed: 14,
      maxScare: 1
    }

    var chickenThreeOptions = {
      name: "Anime Chicken",
      speed: 10,
      maxScare: 2
    }

    var chickenFourOptions = {
      name: "Average Chicken",
      speed: 8,
      maxScare: 2
    }

    this.chicken1 = new Chicken(chickenOneOptions);
    this.chicken2 = new Chicken(chickenTwoOptions);
    this.chicken3 = new Chicken(chickenThreeOptions);
    this.chicken4 = new Chicken(chickenFourOptions);
    this.chickens = [this.chicken1, this.chicken2, this.chicken3, this.chicken4];
    this.chickenPen = new ChickenPen(this.chickens);

  }
}

module.exports = ChickenData;