"use strict"

class Chicken {

  constructor(options){
    this.name = options.name;
    this.speed = options.speed;
    this.scare = options.scare;
  }

  decreaseSpeed(value) {
    if(!value)
      value = 1;
    if(this.speed === 0) return;
    this.speed = this.speed - value;
  }

}

module.exports = Chicken;